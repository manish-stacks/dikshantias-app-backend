'use strict';
const { CourseProgress } = require('../models');

class CourseProgressController {
  static async create(req, res) {
    try {
      const item = await CourseProgress.create(req.body);
      return res.status(201).json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating courseprogress', error });
    }
  }

  static async findAll(req, res) {
    try {
      const items = await CourseProgress.findAll();
      return res.json(items);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching courseprogresss', error });
    }
  }

  static async findOne(req, res) {
    try {
      const item = await CourseProgress.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'CourseProgress not found' });
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching courseprogress', error });
    }
  }

  static async update(req, res) {
    try {
      const item = await CourseProgress.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'CourseProgress not found' });
      await item.update(req.body);
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error updating courseprogress', error });
    }
  }

  static async delete(req, res) {
    try {
      const item = await CourseProgress.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'CourseProgress not found' });
      await item.destroy();
      return res.json({ message: 'CourseProgress deleted' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting courseprogress', error });
    }
  }
}

module.exports = CourseProgressController;
