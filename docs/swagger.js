const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'Node.js Demo API',
    version: '1.0.0',
    description: 'Simple demo API showing controllers, logging, and sample data.',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Local server',
    },
  ],
  components: {
    schemas: {
      User: {
        type: 'object',
        properties: {
          id: { type: 'integer', example: 1 },
          name: { type: 'string', example: 'Alice Anderson' },
          role: { type: 'string', example: 'admin' },
        },
      },
      Post: {
        type: 'object',
        properties: {
          id: { type: 'integer', example: 101 },
          title: { type: 'string', example: 'Getting started with Node.js' },
          authorId: { type: 'integer', example: 1 },
        },
      },
      Contact: {
        type: 'object',
        properties: {
          email: { type: 'string', example: 'contact@example.com' },
          phone: { type: 'string', example: '+1-555-0100' },
        },
      },
    },
  },
  paths: {
    '/': {
      get: {
        summary: 'Home route',
        responses: {
          200: {
            description: 'Returns a welcome message.',
            content: {
              'text/plain': {
                schema: { type: 'string', example: 'Welcome to the Node.js demo API!' },
              },
            },
          },
        },
      },
    },
    '/about': {
      get: {
        summary: 'About route',
        responses: {
          200: {
            description: 'Describes the API purpose.',
            content: {
              'text/plain': {
                schema: {
                  type: 'string',
                  example: 'This API showcases how to structure routes, controllers, and logging.',
                },
              },
            },
          },
        },
      },
    },
    '/contact': {
      get: {
        summary: 'Contact route',
        responses: {
          200: {
            description: 'Returns contact information.',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Contact',
                },
              },
            },
          },
        },
      },
    },
    '/users': {
      get: {
        summary: 'List all users',
        responses: {
          200: {
            description: 'Array of demo users.',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/User' },
                },
              },
            },
          },
        },
      },
    },
    '/users/{id}': {
      get: {
        summary: 'Get user by ID',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: { type: 'integer' },
            description: 'User identifier',
          },
        ],
        responses: {
          200: {
            description: 'Requested user.',
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/User' },
              },
            },
          },
          404: {
            description: 'User not found.',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    error: { type: 'string', example: 'User not found' },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/posts': {
      get: {
        summary: 'List all posts',
        responses: {
          200: {
            description: 'Array of demo posts.',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: { $ref: '#/components/schemas/Post' },
                },
              },
            },
          },
        },
      },
    },
  },
};

module.exports = swaggerDocument;

