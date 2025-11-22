'use strict';
const { ScholarshipResult } = require('../models');

class ScholarshipResultController {
  static async create(req, res) {
    try {
      const item = await ScholarshipResult.create(req.body);
      return res.status(201).json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating scholarshipresult', error });
    }
  }

  static async findAll(req, res) {
    try {
      const items = await ScholarshipResult.findAll();
      return res.json(items);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching scholarshipresults', error });
    }
  }

  static async findOne(req, res) {
    try {
      const item = await ScholarshipResult.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'ScholarshipResult not found' });
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching scholarshipresult', error });
    }
  }

  static async update(req, res) {
    try {
      const item = await ScholarshipResult.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'ScholarshipResult not found' });
      await item.update(req.body);
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error updating scholarshipresult', error });
    }
  }

  static async delete(req, res) {
    try {
      const item = await ScholarshipResult.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'ScholarshipResult not found' });
      await item.destroy();
      return res.json({ message: 'ScholarshipResult deleted' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting scholarshipresult', error });
    }
  }
}

module.exports = ScholarshipResultController;
