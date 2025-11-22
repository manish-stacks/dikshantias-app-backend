'use strict';
const { MCQQuestion } = require('../models');

class MCQQuestionController {
  static async create(req, res) {
    try {
      const item = await MCQQuestion.create(req.body);
      return res.status(201).json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating mcqquestion', error });
    }
  }

  static async findAll(req, res) {
    try {
      const items = await MCQQuestion.findAll();
      return res.json(items);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching mcqquestions', error });
    }
  }

  static async findOne(req, res) {
    try {
      const item = await MCQQuestion.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'MCQQuestion not found' });
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching mcqquestion', error });
    }
  }

  static async update(req, res) {
    try {
      const item = await MCQQuestion.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'MCQQuestion not found' });
      await item.update(req.body);
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error updating mcqquestion', error });
    }
  }

  static async delete(req, res) {
    try {
      const item = await MCQQuestion.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'MCQQuestion not found' });
      await item.destroy();
      return res.json({ message: 'MCQQuestion deleted' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting mcqquestion', error });
    }
  }
}

module.exports = MCQQuestionController;
