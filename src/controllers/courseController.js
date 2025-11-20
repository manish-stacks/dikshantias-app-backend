const { CourseCategory, Course, CourseVideo, CourseProgress } = require('../models');

exports.createCategory = async (req, res) => {
  const { name, image } = req.body;
  const c = await CourseCategory.create({ name, image });
  res.json(c);
};


exports.createCourse = async (req, res) => {
  const { subcategory_id, title, description, type, price } = req.body;
  const c = await Course.create({ subcategory_id, title, description, type, price });
  res.json(c);
};

exports.uploadVideo = async (req, res) => {
  // Expect multer middleware; for simplicity assume file is uploaded to S3 elsewhere and URL provided
  const { course_id, title, video_url, duration } = req.body;
  const v = await CourseVideo.create({ course_id, title, video_url, duration });
  res.json(v);
};

exports.progress = async (req, res) => {
  const { user_id, video_id, progress_percent } = req.body;
  let p = await CourseProgress.findOne({ where: { user_id, video_id }});
  if (!p) p = await CourseProgress.create({ user_id, video_id, progress_percent });
  else { p.progress_percent = progress_percent; await p.save(); }
  res.json(p);
};
