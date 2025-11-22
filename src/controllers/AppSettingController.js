'use strict';
const { AppSetting } = require('../models');

class AppSettingController {
  static async create(req, res) {
    try {
      const item = await AppSetting.create(req.body);
      return res.status(201).json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error creating appsetting', error });
    }
  }

  static async findAll(req, res) {
    try {
      const items = await AppSetting.findAll();
      return res.json(items);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching appsettings', error });
    }
  }

  static async findOne(req, res) {
    try {
      const item = await AppSetting.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'AppSetting not found' });
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error fetching appsetting', error });
    }
  }

  static async update(req, res) {
    try {
      const item = await AppSetting.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'AppSetting not found' });
      await item.update(req.body);
      return res.json(item);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error updating appsetting', error });
    }
  }

  static async delete(req, res) {
    try {
      const item = await AppSetting.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: 'AppSetting not found' });
      await item.destroy();
      return res.json({ message: 'AppSetting deleted' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error deleting appsetting', error });
    }
  }
}

module.exports = AppSettingController;
