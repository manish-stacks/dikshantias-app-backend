'use strict';

const { Program } = require('../models');
const redis = require('../config/redis');
const uploadToS3 = require('../utils/s3Upload');
const deleteFromS3 = require("../utils/s3Delete");
const { generateSlug } = require('../utils/helpers');

class ProgramController {

  // =========================
  // CREATE PROGRAM
  // =========================
  static async create(req, res) {
    try {
      let imageUrl = null;

      if (req.file) {
        imageUrl = await uploadToS3(req.file, "programs");
      }

      const program = await Program.create({
        name: req.body.name,
        slug: generateSlug(req.body.name),
        description: req.body.description,
        imageUrl: imageUrl,
      });

      await redis.del("programs");

      return res.status(201).json(program);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Error creating program",
        error
      });
    }
  }



  // =========================
  // GET ALL PROGRAMS
  // =========================
  static async findAll(req, res) {
    try {
      // ✔ Check Redis cache first
      const cacheData = await redis.get("programs");

      if (cacheData) {
        return res.json(JSON.parse(cacheData));
      }

      const programs = await Program.findAll();

      // ✔ Save in Redis (cache 60 seconds)
      await redis.set("programs", JSON.stringify(programs), "EX", 60);

      return res.json(programs);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Error fetching programs",
        error
      });
    }
  }



  // =========================
  // GET SINGLE PROGRAM
  // =========================
  static async findOne(req, res) {
    try {
      const programId = req.params.id;

      // ✔ Check Redis first
      const cacheKey = `program:${programId}`;
      const cacheData = await redis.get(cacheKey);

      if (cacheData) {
        return res.json(JSON.parse(cacheData));
      }

      const program = await Program.findByPk(programId);

      if (!program) {
        return res.status(404).json({ message: "Program not found" });
      }

      // ✔ Save in Redis
      await redis.set(cacheKey, JSON.stringify(program), "EX", 300);

      return res.json(program);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Error fetching program",
        error
      });
    }
  }



  // =========================
  // UPDATE PROGRAM
  // =========================
  static async update(req, res) {
    try {
      const program = await Program.findByPk(req.params.id);

      if (!program) {
        return res.status(404).json({ message: "Program not found" });
      }

      let imageUrl = program.imageUrl;

      if (req.file) {
         await deleteFromS3(program.imageUrl);
        imageUrl = await uploadToS3(req.file, "programs");
      }

      await program.update({
        name: req.body.name,
        slug: generateSlug(req.body.name),
        description: req.body.description,
        imageUrl: imageUrl,
      });

    
      await redis.del("programs");
      await redis.del(`program:${req.params.id}`);

      return res.json(program);
      
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Error updating program",
        error
      });
    }
  }



  // =========================
  // DELETE PROGRAM
  // =========================
  static async delete(req, res) {
    try {
      const program = await Program.findByPk(req.params.id);

      if (!program) {
        return res.status(404).json({ message: "Program not found" });
      }
      await deleteFromS3(program.imageUrl);
      await program.destroy();

      await redis.del("programs");
      await redis.del(`program:${req.params.id}`);

      return res.json({ message: "Program deleted successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: "Error deleting program",
        error
      });
    }
  }
}

module.exports = ProgramController;
