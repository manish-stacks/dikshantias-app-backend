const { Scholarship, ScholarshipApplication, ScholarshipResult } = require('../models');

exports.createScholarship = async (req, res) => {
  const { title, description, eligibility, last_date } = req.body;
  const s = await Scholarship.create({ title, description, eligibility, last_date });
  res.json(s);
};

exports.apply = async (req, res) => {
  const { scholarship_id } = req.body;
  const file = req.file;
  const a = await ScholarshipApplication.create({ scholarship_id, user_id: req.user.id, document_url: file ? file.path : null });
  res.json(a);
};

exports.resultList = async (req, res) => {
  const list = await ScholarshipResult.findAll({ where: { scholarship_id: req.params.id }});
  res.json(list);
};
