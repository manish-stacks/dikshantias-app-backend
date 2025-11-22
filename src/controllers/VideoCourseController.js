'use strict';
const { VideoCourse } = require('../models');

class VideoCourseController {
  static async create(req, res) {
    try {
      const item = await VideoCourse.create(req.body);
      return res.status(201).json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating videocourse', error });
    }
  }

  static async findAll(req, res) {
    try {
      const items = await VideoCourse.findAll();
      return res.json(items);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching videocourses', error });
    }
  }

  static async findOne(req, res) {
    try {
      const item = await VideoCourse.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'VideoCourse not found' });
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching videocourse', error });
    }
  }

  static async update(req, res) {
    try {
      const item = await VideoCourse.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'VideoCourse not found' });
      await item.update(req.body);
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error updating videocourse', error });
    }
  }

  static async delete(req, res) {
    try {
      const item = await VideoCourse.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'VideoCourse not found' });
      await item.destroy();
      return res.json({ message: 'VideoCourse deleted' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting videocourse', error });
    }
  }
}

module.exports = VideoCourseController;
