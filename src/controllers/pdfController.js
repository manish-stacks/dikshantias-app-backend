const { PdfNote } = require('../models');
const s3 = require('../config/s3');

exports.uploadPdf = async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ error: 'file missing' });
    const key = `pdfs/${Date.now()}_${file.originalname}`;
    const params = { Bucket: process.env.AWS_BUCKET, Key: key, Body: file.buffer };
    const data = await s3.upload(params).promise();
    const note = await PdfNote.create({ course_id: req.body.course_id, title: req.body.title, file_url: data.Location, is_downloadable: true });
    res.json(note);
  } catch (err) { console.error(err); res.status(500).json({ error: 'Upload failed' }); }
};

exports.generateDownloadToken = (req, res) => {
  // Simple JWT token for download
  const { sign } = require('../utils/generateToken');
  const token = sign({ note_id: req.params.id }, '5m');
  res.json({ token });
};
