'use strict';
const { Page } = require('../models');

class PageController {
  static async create(req, res) {
    try {
      const item = await Page.create(req.body);
      return res.status(201).json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating page', error });
    }
  }

  static async findAll(req, res) {
    try {
      const items = await Page.findAll();
      return res.json(items);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching pages', error });
    }
  }

  static async findOne(req, res) {
    try {
      const item = await Page.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Page not found' });
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching page', error });
    }
  }

  static async update(req, res) {
    try {
      const item = await Page.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Page not found' });
      await item.update(req.body);
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error updating page', error });
    }
  }

  static async delete(req, res) {
    try {
      const item = await Page.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Page not found' });
      await item.destroy();
      return res.json({ message: 'Page deleted' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting page', error });
    }
  }
}

module.exports = PageController;
