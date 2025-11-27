'use strict';
const { PDFNote } = require('../models');


class PDFNoteController {
  static async create(req, res) {
    try {
      const item = await PDFNote.create(req.body);
      return res.status(201).json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating pdfnote', error });
    }
  }


  static async findAll(req, res) {
    try {
      const items = await PDFNote.findAll();
      return res.json(items);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching pdfnotes', error });
    }
  }

  static async findOne(req, res) {
    try {
      const item = await PDFNote.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'PDFNote not found' });
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching pdfnote', error });
    }
  }

  static async update(req, res) {
    try {
      const item = await PDFNote.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'PDFNote not found' });
      await item.update(req.body);
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error updating pdfnote', error });
    }
  }

  static async delete(req, res) {
    try {
      const item = await PDFNote.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'PDFNote not found' });
      await item.destroy();
      return res.json({ message: 'PDFNote deleted' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting pdfnote', error });
    }
  }
}

module.exports = PDFNoteController;
