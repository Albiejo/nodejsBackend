// server.js
const express = require('express');
const logger = require('./logger');
const {
  sendHome,
  sendAbout,
  sendContact,
  listUsers,
  getUserById,
  listPosts,
} = require('./controllers/demoController');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', sendHome);
app.get('/about', sendAbout);
app.get('/contact', sendContact);
app.get('/users', listUsers);
app.get('/users/:id', getUserById);
app.get('/posts', listPosts);

module.exports = app;

if (require.main === module) {
  app.listen(port, () => {
    logger.info(`Server is running on http://localhost:${port}`);
  });
}