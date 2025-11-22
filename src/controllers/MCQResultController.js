'use strict';
const { MCQResult } = require('../models');

class MCQResultController {
  static async create(req, res) {
    try {
      const item = await MCQResult.create(req.body);
      return res.status(201).json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating mcqresult', error });
    }
  }

  static async findAll(req, res) {
    try {
      const items = await MCQResult.findAll();
      return res.json(items);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching mcqresults', error });
    }
  }

  static async findOne(req, res) {
    try {
      const item = await MCQResult.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'MCQResult not found' });
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching mcqresult', error });
    }
  }

  static async update(req, res) {
    try {
      const item = await MCQResult.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'MCQResult not found' });
      await item.update(req.body);
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error updating mcqresult', error });
    }
  }

  static async delete(req, res) {
    try {
      const item = await MCQResult.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'MCQResult not found' });
      await item.destroy();
      return res.json({ message: 'MCQResult deleted' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting mcqresult', error });
    }
  }
}

module.exports = MCQResultController;
