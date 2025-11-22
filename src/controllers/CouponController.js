'use strict';
const { Coupon } = require('../models');

class CouponController {
  static async create(req, res) {
    try {
      const item = await Coupon.create(req.body);
      return res.status(201).json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating coupon', error });
    }
  }

  static async findAll(req, res) {
    try {
      const items = await Coupon.findAll();
      return res.json(items);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching coupons', error });
    }
  }

  static async findOne(req, res) {
    try {
      const item = await Coupon.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Coupon not found' });
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching coupon', error });
    }
  }

  static async update(req, res) {
    try {
      const item = await Coupon.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Coupon not found' });
      await item.update(req.body);
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error updating coupon', error });
    }
  }

  static async delete(req, res) {
    try {
      const item = await Coupon.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Coupon not found' });
      await item.destroy();
      return res.json({ message: 'Coupon deleted' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting coupon', error });
    }
  }
}

module.exports = CouponController;
