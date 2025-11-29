// server.js
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const { graphqlHTTP } = require('express-graphql');
const logger = require('./logger');
const swaggerDocument = require('./docs/swagger');
const { schema, rootResolver } = require('./graphql/schema');
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

//Telling app to use swagger UI on /docs route with metadata from swagger.js file 
app.use(
  '/docs',
  (req, res, next) => {
    logger.info('GET /docs - swagger UI accessed');
    next();
  },
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, { explorer: true })
);

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: rootResolver,
    graphiql: true,
  })
);

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