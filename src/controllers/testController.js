const { Test, McqQuestion, McqResult, SubjectiveTest, SubjectiveAnswer } = require('../models');

exports.createTest = async (req, res) => {
  const { title, type, duration_minutes } = req.body;
  const t = await Test.create({ title, type, duration_minutes });
  res.json(t);
};

exports.addMcq = async (req, res) => {
  const { test_id, question, option_a, option_b, option_c, option_d, correct_answer } = req.body;
  const q = await McqQuestion.create({ test_id, question, option_a, option_b, option_c, option_d, correct_answer });
  res.json(q);
};

exports.submitMcq = async (req, res) => {
  const { test_id, answers } = req.body; // answers: [{ question_id, answer }]
  const questions = await McqQuestion.findAll({ where: { test_id }});
  const map = {};
  questions.forEach(q=>map[q.id]=q.correct_answer);
  let score = 0;
  answers.forEach(a => { if (map[a.question_id] === a.answer) score++; });
  const percent = (score / questions.length) * 100;
  const result = await McqResult.create({ user_id: req.user.id, test_id, score, accuracy: percent });
  res.json({ score, percent, result });
};

exports.uploadSubjective = async (req, res) => {
  const { test_id } = req.body;
  const file = req.file;
  const s = await SubjectiveAnswer.create({ test_id, user_id: req.user.id, answer_pdf_url: file ? file.path : null });
  res.json(s);
};
