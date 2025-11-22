'use strict';
const { Scholarship } = require('../models');

class ScholarshipController {
  static async create(req, res) {
    try {
      const item = await Scholarship.create(req.body);
      return res.status(201).json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating scholarship', error });
    }
  }

  static async findAll(req, res) {
    try {
      const items = await Scholarship.findAll();
      return res.json(items);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching scholarships', error });
    }
  }

  static async findOne(req, res) {
    try {
      const item = await Scholarship.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Scholarship not found' });
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching scholarship', error });
    }
  }

  static async update(req, res) {
    try {
      const item = await Scholarship.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Scholarship not found' });
      await item.update(req.body);
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error updating scholarship', error });
    }
  }

  static async delete(req, res) {
    try {
      const item = await Scholarship.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Scholarship not found' });
      await item.destroy();
      return res.json({ message: 'Scholarship deleted' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting scholarship', error });
    }
  }
}

module.exports = ScholarshipController;
