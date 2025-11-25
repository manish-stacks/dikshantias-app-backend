const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ message: 'API is running' });
});

// routes
app.use('/api', routes);
app.get('/health', (req, res) => res.json({ ok: true }));

// sync DB
async function init() {
  await sequelize.sync();//sequelize.sync({ alter: true });
  console.log('DB synced successfully');
}
init().catch(err => console.error('DB sync error', err));

module.exports = app;
