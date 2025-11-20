const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');

const app = express();
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Api running successfully :)');
})

// routes
app.use('/auth', require('./routes/auth'));
app.use('/courses', require('./routes/course'));
app.use('/pdfs', require('./routes/pdf'));
app.use('/tests', require('./routes/test'));
app.use('/notifications', require('./routes/notification'));
app.use('/payments', require('./routes/payment'));
app.use('/scholarships', require('./routes/scholarship'));

app.get('/health', (req, res) => res.json({ ok: true }));

// sync DB
async function init() {
  await sequelize.sync();//sequelize.sync({ alter: true });
  console.log('DB synced successfully');
}
init().catch(err => console.error('DB sync error', err));

module.exports = app;
