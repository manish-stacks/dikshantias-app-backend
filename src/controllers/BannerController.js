"use strict";

const { Banner } = require("../models");
const redis = require("../config/redis");
const uploadToS3 = require("../utils/s3Upload");
const deleteFromS3 = require("../utils/s3Delete");

class BannerController {

  // CREATE BANNER
  static async create(req, res) {
    try {
      let imageUrl = null;

      if (req.file) {
        imageUrl = await uploadToS3(req.file, "banners");
      }

      const payload = {
        title: req.body.title,
        imageUrl,
        linkUrl: req.body.linkUrl
      };

      const item = await Banner.create(payload);

      await redis.del("banners");

      return res.status(201).json(item);

    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Error creating banner", error });
    }
  }



  // GET ALL BANNERS
  static async findAll(req, res) {
    try {
      const cache = await redis.get("banners");
      if (cache) return res.json(JSON.parse(cache));

      const items = await Banner.findAll({ order: [["createdAt", "DESC"]] });

      await redis.set("banners", JSON.stringify(items), "EX", 300);

      return res.json(items);

    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Error fetching banners", error });
    }
  }



  // GET SINGLE BANNER
  static async findOne(req, res) {
    try {
      const id = req.params.id;

      const cache = await redis.get(`banner:${id}`);
      if (cache) return res.json(JSON.parse(cache));

      const item = await Banner.findByPk(id);
      if (!item) return res.status(404).json({ message: "Banner not found" });

      await redis.set(`banner:${id}`, JSON.stringify(item), "EX", 300);

      return res.json(item);

    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Error fetching banner", error });
    }
  }



  // UPDATE BANNER
  static async update(req, res) {
    try {
      const item = await Banner.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: "Banner not found" });

      let imageUrl = item.imageUrl;

      if (req.file) {
        if (item.imageUrl) await deleteFromS3(item.imageUrl);
        imageUrl = await uploadToS3(req.file, "banners");
      }

      await item.update({
        title: req.body.title || item.title,
        imageUrl,
        linkUrl: req.body.linkUrl || item.linkUrl
      });

      await redis.del("banners");
      await redis.del(`banner:${req.params.id}`);

      return res.json(item);

    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Error updating banner", error });
    }
  }



  // DELETE BANNER
  static async delete(req, res) {
    try {
      const item = await Banner.findByPk(req.params.id);

      if (!item) return res.status(404).json({ message: "Banner not found" });

      if (item.imageUrl) await deleteFromS3(item.imageUrl);

      await item.destroy();

      await redis.del("banners");
      await redis.del(`banner:${req.params.id}`);

      return res.json({ message: "Banner deleted" });

    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Error deleting banner", error });
    }
  }
}

module.exports = BannerController;
