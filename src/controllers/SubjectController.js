'use strict';
const { Subject } = require('../models');

class SubjectController {
  static async create(req, res) {
    try {
      const item = await Subject.create(req.body);
      return res.status(201).json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating subject', error });
    }
  }

  static async findAll(req, res) {
    try {
      const items = await Subject.findAll();
      return res.json(items);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching subjects', error });
    }
  }

  static async findOne(req, res) {
    try {
      const item = await Subject.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Subject not found' });
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching subject', error });
    }
  }

  static async update(req, res) {
    try {
      const item = await Subject.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Subject not found' });
      await item.update(req.body);
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error updating subject', error });
    }
  }

  static async delete(req, res) {
    try {
      const item = await Subject.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Subject not found' });
      await item.destroy();
      return res.json({ message: 'Subject deleted' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting subject', error });
    }
  }
}

module.exports = SubjectController;
