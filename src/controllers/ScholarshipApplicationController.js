'use strict';
const { ScholarshipApplication } = require('../models');

class ScholarshipApplicationController {
  static async create(req, res) {
    try {
      const item = await ScholarshipApplication.create(req.body);
      return res.status(201).json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating scholarshipapplication', error });
    }
  }

  static async findAll(req, res) {
    try {
      const items = await ScholarshipApplication.findAll();
      return res.json(items);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching scholarshipapplications', error });
    }
  }

  static async findOne(req, res) {
    try {
      const item = await ScholarshipApplication.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'ScholarshipApplication not found' });
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching scholarshipapplication', error });
    }
  }

  static async update(req, res) {
    try {
      const item = await ScholarshipApplication.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'ScholarshipApplication not found' });
      await item.update(req.body);
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error updating scholarshipapplication', error });
    }
  }

  static async delete(req, res) {
    try {
      const item = await ScholarshipApplication.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'ScholarshipApplication not found' });
      await item.destroy();
      return res.json({ message: 'ScholarshipApplication deleted' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting scholarshipapplication', error });
    }
  }
}

module.exports = ScholarshipApplicationController;
