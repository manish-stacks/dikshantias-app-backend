'use strict';

const { VideoCourse } = require('../models');
const redis = require('../config/redis');
const uploadToS3 = require('../utils/s3Upload');
const deleteFromS3 = require('../utils/s3Delete');

class VideoCourseController {

  // CREATE
  static async create(req, res) {
    try {
      let imageUrl = null;

      // Upload image to S3
      if (req.file) {
        imageUrl = await uploadToS3(req.file, "videocourses");
      }

      const payload = {
        imageUrl,
        title: req.body.title,
        videoSource: req.body.videoSource,
        url: req.body.url,
        batchId: req.body.batchId,
        subjectId: req.body.subjectId,
        isDownloadable: req.body.isDownloadable,
        isDemo: req.body.isDemo,
        status: req.body.status,
        programId: req.body.programId
      };

      const item = await VideoCourse.create(payload);

      await redis.del("videocourses");

      return res.status(201).json(item);

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating video course', error });
    }
  }



  // GET ALL
  static async findAll(req, res) {
    try {
      const cache = await redis.get("videocourses");

      if (cache) return res.json(JSON.parse(cache));

      const items = await VideoCourse.findAll();

      await redis.set("videocourses", JSON.stringify(items), "EX", 60);

      return res.json(items);

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching video courses', error });
    }
  }



  // GET BY ID
  static async findOne(req, res) {
    try {
      const id = req.params.id;
      const cacheKey = `videocourse:${id}`;

      const cached = await redis.get(cacheKey);
      if (cached) return res.json(JSON.parse(cached));

      const item = await VideoCourse.findByPk(id);
      if (!item) return res.status(404).json({ message: "Video course not found" });

      await redis.set(cacheKey, JSON.stringify(item), "EX", 300);

      return res.json(item);

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching video course', error });
    }
  }



  // UPDATE
  static async update(req, res) {
    try {
      const item = await VideoCourse.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: "Video course not found" });

      let imageUrl = item.imageUrl;

      if (req.file) {
        if (item.imageUrl) await deleteFromS3(item.imageUrl);
        imageUrl = await uploadToS3(req.file, "videocourses");
      }

      await item.update({
        imageUrl,
        title: req.body.title || item.title,
        videoSource: req.body.videoSource || item.videoSource,
        url: req.body.url || item.url,
        batchId: req.body.batchId !== undefined ? req.body.batchId : item.batchId,
        subjectId: req.body.subjectId !== undefined ? req.body.subjectId : item.subjectId,
        isDownloadable: req.body.isDownloadable !== undefined ? req.body.isDownloadable : item.isDownloadable,
        isDemo: req.body.isDemo !== undefined ? req.body.isDemo : item.isDemo,
        status: req.body.status || item.status,
        programId: req.body.programId || item.programId
      });

      await redis.del("videocourses");
      await redis.del(`videocourse:${req.params.id}`);

      return res.json(item);

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error updating video course', error });
    }
  }



  // DELETE
  static async delete(req, res) {
    try {
      const item = await VideoCourse.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: "Video course not found" });

      if (item.imageUrl) await deleteFromS3(item.imageUrl);

      await item.destroy();

      await redis.del("videocourses");
      await redis.del(`videocourse:${req.params.id}`);

      return res.json({ message: "Video course deleted" });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting video course', error });
    }
  }
}

module.exports = VideoCourseController;
