'use strict';
const { FAQ } = require('../models');

class FAQController {
  static async create(req, res) {
    try {
      const item = await FAQ.create(req.body);
      return res.status(201).json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating faq', error });
    }
  }

  static async findAll(req, res) {
    try {
      const items = await FAQ.findAll();
      return res.json(items);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching faqs', error });
    }
  }

  static async findOne(req, res) {
    try {
      const item = await FAQ.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'FAQ not found' });
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching faq', error });
    }
  }

  static async update(req, res) {
    try {
      const item = await FAQ.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'FAQ not found' });
      await item.update(req.body);
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error updating faq', error });
    }
  }

  static async delete(req, res) {
    try {
      const item = await FAQ.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'FAQ not found' });
      await item.destroy();
      return res.json({ message: 'FAQ deleted' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting faq', error });
    }
  }
}

module.exports = FAQController;
