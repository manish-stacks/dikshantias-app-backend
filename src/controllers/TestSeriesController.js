'use strict';
const { TestSeries } = require('../models');

class TestSeriesController {
  static async create(req, res) {
    try {
      const item = await TestSeries.create(req.body);
      return res.status(201).json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating testseries', error });
    }
  }

  static async findAll(req, res) {
    try {
      const items = await TestSeries.findAll();
      return res.json(items);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching testseriess', error });
    }
  }

  static async findOne(req, res) {
    try {
      const item = await TestSeries.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'TestSeries not found' });
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching testseries', error });
    }
  }

  static async update(req, res) {
    try {
      const item = await TestSeries.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'TestSeries not found' });
      await item.update(req.body);
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error updating testseries', error });
    }
  }

  static async delete(req, res) {
    try {
      const item = await TestSeries.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'TestSeries not found' });
      await item.destroy();
      return res.json({ message: 'TestSeries deleted' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting testseries', error });
    }
  }
}

module.exports = TestSeriesController;
