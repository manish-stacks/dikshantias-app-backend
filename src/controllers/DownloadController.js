'use strict';
const { Download } = require('../models');

class DownloadController {
  static async create(req, res) {
    try {
      const item = await Download.create(req.body);
      return res.status(201).json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating download', error });
    }
  }

  static async findAll(req, res) {
    try {
      const items = await Download.findAll();
      return res.json(items);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching downloads', error });
    }
  }

  static async findOne(req, res) {
    try {
      const item = await Download.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Download not found' });
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching download', error });
    }
  }

  static async update(req, res) {
    try {
      const item = await Download.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Download not found' });
      await item.update(req.body);
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error updating download', error });
    }
  }

  static async delete(req, res) {
    try {
      const item = await Download.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Download not found' });
      await item.destroy();
      return res.json({ message: 'Download deleted' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting download', error });
    }
  }
}

module.exports = DownloadController;
