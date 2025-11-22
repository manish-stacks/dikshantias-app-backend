'use strict';
const { Announcement } = require('../models');

class AnnouncementController {
  static async create(req, res) {
    try {
      const item = await Announcement.create(req.body);
      return res.status(201).json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating announcement', error });
    }
  }

  static async findAll(req, res) {
    try {
      const items = await Announcement.findAll();
      return res.json(items);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching announcements', error });
    }
  }

  static async findOne(req, res) {
    try {
      const item = await Announcement.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Announcement not found' });
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching announcement', error });
    }
  }

  static async update(req, res) {
    try {
      const item = await Announcement.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Announcement not found' });
      await item.update(req.body);
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error updating announcement', error });
    }
  }

  static async delete(req, res) {
    try {
      const item = await Announcement.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Announcement not found' });
      await item.destroy();
      return res.json({ message: 'Announcement deleted' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting announcement', error });
    }
  }
}

module.exports = AnnouncementController;
