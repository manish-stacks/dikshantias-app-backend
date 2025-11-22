'use strict';
const { Program } = require('../models');

class ProgramController {
  static async create(req, res) {
    try {
      const item = await Program.create(req.body);
      return res.status(201).json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating program', error });
    }
  }

  static async findAll(req, res) {
    try {
      const items = await Program.findAll();
      return res.json(items);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching programs', error });
    }
  }

  static async findOne(req, res) {
    try {
      const item = await Program.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Program not found' });
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching program', error });
    }
  }

  static async update(req, res) {
    try {
      const item = await Program.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Program not found' });
      await item.update(req.body);
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error updating program', error });
    }
  }

  static async delete(req, res) {
    try {
      const item = await Program.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Program not found' });
      await item.destroy();
      return res.json({ message: 'Program deleted' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting program', error });
    }
  }
}

module.exports = ProgramController;
