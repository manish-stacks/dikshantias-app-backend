"use strict";

const { CourseProgress, VideoCourse, PDFNote } = require("../models");
const redis = require("../config/redis");

class CourseProgressController {

  // UPDATE OR CREATE PROGRESS
  static async updateProgress(req, res) {
    try {
      const { userId, batchId, programId, itemId, itemType, progress } = req.body;

      if (!userId || !batchId || !itemId || !itemType)
        return res.status(400).json({ message: "Missing required fields" });

      let cp = await CourseProgress.findOne({
        where: { userId, batchId, itemId, itemType }
      });

      const isCompleted = progress >= 100;

      if (cp) {
        await cp.update({
          progress,
          completed: isCompleted,
          lastAccessedAt: new Date()
        });
      } else {
        cp = await CourseProgress.create({
          userId,
          batchId,
          programId,
          itemId,
          itemType,
          progress,
          completed: isCompleted
        });
      }

      await redis.del(`progress:user:${userId}:batch:${batchId}`);

      return res.json(cp);

    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Error updating progress", error });
    }
  }



  // GET PROGRESS OF A BATCH
  static async getBatchProgress(req, res) {
    try {
      const { userId, batchId } = req.params;

      const cacheKey = `progress:user:${userId}:batch:${batchId}`;
      const cache = await redis.get(cacheKey);
      if (cache) return res.json(JSON.parse(cache));

      const progressList = await CourseProgress.findAll({
        where: { userId, batchId }
      });

      await redis.set(cacheKey, JSON.stringify(progressList), "EX", 300);

      return res.json(progressList);

    } catch (error) {
      return res.status(500).json({ message: "Error fetching progress", error });
    }
  }


  // GET TOTAL PERCENTAGE FOR THE BATCH
  static async getBatchCompletion(req, res) {
    try {
      const { userId, batchId } = req.params;

      const items = await CourseProgress.findAll({ where: { userId, batchId } });

      if (!items.length)
        return res.json({ totalProgress: 0 });

      const total = items.reduce((acc, i) => acc + i.progress, 0);
      const totalItems = items.length;

      const percentage = Math.round(total / totalItems);

      return res.json({
        totalItems,
        totalProgress: percentage
      });

    } catch (error) {
      return res.status(500).json({ message: "Error calculating progress", error });
    }
  }

}

module.exports = CourseProgressController;
