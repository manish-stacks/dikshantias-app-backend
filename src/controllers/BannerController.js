'use strict';
const { Banner } = require('../models');

class BannerController {
  static async create(req, res) {
    try {
      const item = await Banner.create(req.body);
      return res.status(201).json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating banner', error });
    }
  }

  static async findAll(req, res) {
    try {
      const items = await Banner.findAll();
      return res.json(items);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching banners', error });
    }
  }

  static async findOne(req, res) {
    try {
      const item = await Banner.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Banner not found' });
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching banner', error });
    }
  }

  static async update(req, res) {
    try {
      const item = await Banner.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Banner not found' });
      await item.update(req.body);
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error updating banner', error });
    }
  }

  static async delete(req, res) {
    try {
      const item = await Banner.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Banner not found' });
      await item.destroy();
      return res.json({ message: 'Banner deleted' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting banner', error });
    }
  }
}

module.exports = BannerController;
