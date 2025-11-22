'use strict';
const { Order } = require('../models');

class OrderController {
  static async create(req, res) {
    try {
      const item = await Order.create(req.body);
      return res.status(201).json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating order', error });
    }
  }

  static async findAll(req, res) {
    try {
      const items = await Order.findAll();
      return res.json(items);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching orders', error });
    }
  }

  static async findOne(req, res) {
    try {
      const item = await Order.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Order not found' });
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching order', error });
    }
  }

  static async update(req, res) {
    try {
      const item = await Order.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Order not found' });
      await item.update(req.body);
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error updating order', error });
    }
  }

  static async delete(req, res) {
    try {
      const item = await Order.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'Order not found' });
      await item.destroy();
      return res.json({ message: 'Order deleted' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting order', error });
    }
  }
}

module.exports = OrderController;
