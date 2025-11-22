'use strict';
const { Blog } = require('../models');

class BlogController {
  static async create(req, res) {
    try {
      const item = await Blog.create(req.body);
      return res.status(201).json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating blog', error });
    }
  }

  static async findAll(req, res) {
    try {
      const items = await Blog.findAll();
      return res.json(items);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching blogs', error });
    }
  }

  static async findOne(req, res) {
    try {
      const item = await Blog.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Blog not found' });
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching blog', error });
    }
  }

  static async update(req, res) {
    try {
      const item = await Blog.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Blog not found' });
      await item.update(req.body);
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error updating blog', error });
    }
  }

  static async delete(req, res) {
    try {
      const item = await Blog.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Blog not found' });
      await item.destroy();
      return res.json({ message: 'Blog deleted' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting blog', error });
    }
  }
}

module.exports = BlogController;
