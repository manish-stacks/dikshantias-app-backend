"use strict";

const { Scholarship, ScholarshipMCQQuestion, ScholarshipResult } = require("../models");

class ScholarshipResultController {

 
  static async submit(req, res) {
    try {
      const { userId, scholarshipId, answers } = req.body;

      const scholarship = await Scholarship.findByPk(scholarshipId);
      if (!scholarship)
        return res.status(404).json({ message: "Scholarship not found" });

      const totalQuestions = scholarship.noOfQuestions;

      let correct = 0;
      let wrong = 0;
      let skipped = 0;
      let totalScore = 0;
      let totalTime = 0;

      for (const ans of answers) {
        const q = await ScholarshipMCQQuestion.findByPk(ans.questionId);
        if (!q) continue;

        const correctOption = Array.isArray(q.correctOption)
          ? q.correctOption
          : JSON.parse(q.correctOption);

        const selected = ans.selectedOptions || [];

        const isSkipped = selected.length === 0;

        const isCorrect =
          !isSkipped &&
          JSON.stringify([...selected].sort()) ===
          JSON.stringify([...correctOption].sort());

        if (isCorrect) {
          correct++;
          totalScore += q.positiveMarks;
        } else if (isSkipped) {
          skipped++;
        } else {
          wrong++;
          totalScore -= q.negativeMark;
        }

        totalTime += ans.timeTaken || 0;
      }

      const accuracy = (correct / totalQuestions) * 100;

      const result = await ScholarshipResult.create({
        userId,
        scholarshipId,
        totalQuestions,
        correct,
        wrong,
        skipped,
        totalScore,
        accuracy,
        timeTaken: totalTime
      });

      return res.status(201).json({
        message: "Scholarship test submitted successfully",
        result
      });

    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Error submitting test", error });
    }
  }


  static async getUserResult(req, res) {
    try {
      const { scholarshipId, userId } = req.params;

      const result = await ScholarshipResult.findOne({
        where: { scholarshipId, userId }
      });

      if (!result)
        return res.status(404).json({ message: "No result found" });

      return res.json(result);

    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Error loading summary", error });
    }
  }
}

module.exports = ScholarshipResultController;
