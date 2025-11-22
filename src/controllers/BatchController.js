'use strict';
const { Batch } = require('../models');

class BatchController {
  static async create(req, res) {
    try {
      const item = await Batch.create(req.body);
      return res.status(201).json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating batch', error });
    }
  }

  static async findAll(req, res) {
    try {
      const items = await Batch.findAll();
      return res.json(items);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching batchs', error });
    }
  }

  static async findOne(req, res) {
    try {
      const item = await Batch.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Batch not found' });
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching batch', error });
    }
  }

  static async update(req, res) {
    try {
      const item = await Batch.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Batch not found' });
      await item.update(req.body);
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error updating batch', error });
    }
  }

  static async delete(req, res) {
    try {
      const item = await Batch.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Batch not found' });
      await item.destroy();
      return res.json({ message: 'Batch deleted' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting batch', error });
    }
  }
}

module.exports = BatchController;
