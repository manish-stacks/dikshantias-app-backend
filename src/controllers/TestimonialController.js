'use strict';
const { Testimonial } = require('../models');

class TestimonialController {
  static async create(req, res) {
    try {
      const item = await Testimonial.create(req.body);
      return res.status(201).json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating testimonial', error });
    }
  }

  static async findAll(req, res) {
    try {
      const items = await Testimonial.findAll();
      return res.json(items);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching testimonials', error });
    }
  }

  static async findOne(req, res) {
    try {
      const item = await Testimonial.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Testimonial not found' });
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching testimonial', error });
    }
  }

  static async update(req, res) {
    try {
      const item = await Testimonial.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Testimonial not found' });
      await item.update(req.body);
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error updating testimonial', error });
    }
  }

  static async delete(req, res) {
    try {
      const item = await Testimonial.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Testimonial not found' });
      await item.destroy();
      return res.json({ message: 'Testimonial deleted' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting testimonial', error });
    }
  }
}

module.exports = TestimonialController;
