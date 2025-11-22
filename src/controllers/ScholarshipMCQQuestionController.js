'use strict';
const { ScholarshipMCQQuestion } = require('../models');

class ScholarshipMCQQuestionController {
  static async create(req, res) {
    try {
      const item = await ScholarshipMCQQuestion.create(req.body);
      return res.status(201).json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating scholarshipmcqquestion', error });
    }
  }

  static async findAll(req, res) {
    try {
      const items = await ScholarshipMCQQuestion.findAll();
      return res.json(items);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching scholarshipmcqquestions', error });
    }
  }

  static async findOne(req, res) {
    try {
      const item = await ScholarshipMCQQuestion.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'ScholarshipMCQQuestion not found' });
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching scholarshipmcqquestion', error });
    }
  }

  static async update(req, res) {
    try {
      const item = await ScholarshipMCQQuestion.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'ScholarshipMCQQuestion not found' });
      await item.update(req.body);
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error updating scholarshipmcqquestion', error });
    }
  }

  static async delete(req, res) {
    try {
      const item = await ScholarshipMCQQuestion.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'ScholarshipMCQQuestion not found' });
      await item.destroy();
      return res.json({ message: 'ScholarshipMCQQuestion deleted' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting scholarshipmcqquestion', error });
    }
  }
}

module.exports = ScholarshipMCQQuestionController;
