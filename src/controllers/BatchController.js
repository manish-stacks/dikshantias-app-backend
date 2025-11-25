'use strict';

const { Batch } = require('../models');
const redis = require('../config/redis');
const uploadToS3 = require('../utils/s3Upload');
const deleteFromS3 = require('../utils/s3Delete');
const { generateSlug } = require('../utils/helpers');

class BatchController {

  // CREATE
  static async create(req, res) {
    try {
      let imageUrl = null;

      if (req.file) {
        imageUrl = await uploadToS3(req.file, "batchs");
      }

      const payload = {
        name: req.body.name,
        slug: generateSlug(req.body.name),
        imageUrl,
        displayOrder: req.body.displayOrder,
        programId: req.body.programId,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        registrationStartDate: req.body.registrationStartDate,
        registrationEndDate: req.body.registrationEndDate,
        status: req.body.status,
        shortDescription: req.body.shortDescription,
        longDescription: req.body.longDescription,
        batchPrice: req.body.batchPrice,
        batchDiscountPrice: req.body.batchDiscountPrice,
        gst: req.body.gst,
        offerValidityDays: req.body.offerValidityDays
      };

      const item = await Batch.create(payload);

      await redis.del("batchs");

      return res.status(201).json(item);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Error creating batch", err });
    }
  }



  // FIND ALL
  static async findAll(req, res) {
    try {
      const cache = await redis.get("batchs");
      if (cache) return res.json(JSON.parse(cache));

      const items = await Batch.findAll();

      await redis.set("batchs", JSON.stringify(items), "EX", 60);

      return res.json(items);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error fetching batches', err });
    }
  }



  // FIND ONE
  static async findOne(req, res) {
    try {
      const id = req.params.id;
      const cacheKey = `batch:${id}`;

      const cached = await redis.get(cacheKey);
      if (cached) return res.json(JSON.parse(cached));

      const item = await Batch.findByPk(id);

      if (!item) return res.status(404).json({ message: "Batch not found" });

      await redis.set(cacheKey, JSON.stringify(item), "EX", 300);

      return res.json(item);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error fetching batch', err });
    }
  }



  // UPDATE
  static async update(req, res) {
    try {
      const item = await Batch.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: "Batch not found" });

      let imageUrl = item.imageUrl;

      if (req.file) {
        if (item.imageUrl) await deleteFromS3(item.imageUrl);
        imageUrl = await uploadToS3(req.file, "batchs");
      }

      const payload = {
        name: req.body.name,
        slug: req.body.name ? generateSlug(req.body.name) : item.slug,
        imageUrl,
        displayOrder: req.body.displayOrder,
        programId: req.body.programId,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        registrationStartDate: req.body.registrationStartDate,
        registrationEndDate: req.body.registrationEndDate,
        status: req.body.status,
        shortDescription: req.body.shortDescription,
        longDescription: req.body.longDescription,
        batchPrice: req.body.batchPrice,
        batchDiscountPrice: req.body.batchDiscountPrice,
        gst: req.body.gst,
        offerValidityDays: req.body.offerValidityDays
      };

      await item.update(payload);

      await redis.del("batchs");
      await redis.del(`batch:${req.params.id}`);

      return res.json(item);

    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error updating batch', err });
    }
  }



  // DELETE
  static async delete(req, res) {
    try {
      const item = await Batch.findByPk(req.params.id);
      if (!item) return res.status(404).json({ message: "Batch not found" });

      if (item.imageUrl) await deleteFromS3(item.imageUrl);

      await item.destroy();

      await redis.del("batchs");
      await redis.del(`batch:${req.params.id}`);

      return res.json({ message: "Batch deleted" });

    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error deleting batch', err });
    }
  }
}

module.exports = BatchController;
