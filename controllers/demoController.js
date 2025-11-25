const logger = require('../logger');
const { demoUsers, demoPosts } = require('../data/demoData');

const sendHome = (req, res) => {
  logger.info('GET / - home route hit');
  res.send('Welcome to the Node.js demo API!');
};

const sendAbout = (req, res) => {
  logger.info('GET /about - about route hit');
  res.send('This API showcases how to structure routes, controllers, and logging.');
};

const sendContact = (req, res) => {
  logger.info('GET /contact - contact route hit');
  res.json({ email: 'contact@example.com', phone: '+1-555-0100' });
};

const listUsers = (req, res) => {
  logger.info('GET /users - returning demo users');
  res.json(demoUsers);
};

const getUserById = (req, res) => {
  const id = Number(req.params.id);
  const user = demoUsers.find((item) => item.id === id);

  if (!user) {
    logger.warn(`GET /users/${req.params.id} - user not found`);
    return res.status(404).json({ error: 'User not found' });
  }

  logger.info(`GET /users/${req.params.id} - returning user`);
  res.json(user);
};

const listPosts = (req, res) => {
  logger.info('GET /posts - returning demo posts');
  res.json(demoPosts);
};

module.exports = {
  sendHome,
  sendAbout,
  sendContact,
  listUsers,
  getUserById,
  listPosts,
};

