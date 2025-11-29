# Node.js Backend - Learning Project

A hands-on learning project to explore and understand key backend technologies in Node.js ecosystem including **Express.js**, **Swagger/OpenAPI**, **GraphQL**, **Winston Logger**, and **Jest Testing**.

---

## 🎯 Purpose

This project was created for **study purposes** to learn and practice:

- Building REST APIs with Express.js
- API documentation using Swagger/OpenAPI 3.0
- GraphQL queries and schema design
- Structured logging with Winston
- Unit testing with Jest & Supertest
- Clean project architecture (MVC pattern)

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **Express.js** | Web framework for building REST APIs |
| **Swagger UI** | Interactive API documentation |
| **GraphQL** | Query language for flexible data fetching |
| **graphql-http** | GraphQL HTTP server middleware |
| **Winston** | Logging library with timestamps |
| **Jest** | Testing framework |
| **Supertest** | HTTP assertions for API testing |
| **Nodemon** | Auto-restart during development |

---

## 📁 Project Structure

```
nodejsBackend/
├── controllers/
│   └── demoController.js    # Route handler functions
├── data/
│   └── demoData.js          # Mock data (users, posts)
├── docs/
│   └── swagger.js           # OpenAPI 3.0 specification
├── graphql/
│   └── schema.js            # GraphQL schema & resolvers
├── test/
│   └── server.test.js       # Jest test suites
├── logger.js                # Winston logger configuration
├── server.js                # Express app entry point
├── package.json             # Dependencies & scripts
└── README.md                # You are here!
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Installation

```bash
# Clone or navigate to project directory
cd nodejsBackend

# Install dependencies
npm install
```

### Running the Server

```bash
# Development mode (with auto-reload)
npm run dev

# Production mode
npm start
```

Server runs at: `http://localhost:3000`

---

## 📚 Learning Topics

### 1. Express.js REST API

Basic REST endpoints demonstrating routing and controllers:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Home page |
| GET | `/about` | About page |
| GET | `/contact` | Contact info (JSON) |
| GET | `/users` | List all users |
| GET | `/users/:id` | Get user by ID |
| GET | `/posts` | List all posts |

**Key Concepts Learned:**
- Route handling with `app.get()`
- Path parameters (`:id`)
- JSON responses with `res.json()`
- Controller pattern for separating logic

---

### 2. Swagger / OpenAPI Documentation

Interactive API documentation available at: `http://localhost:3000/docs`

**File:** `docs/swagger.js`

**Key Concepts Learned:**
- OpenAPI 3.0 specification structure
- Defining schemas (User, Post, Contact)
- Path documentation with parameters
- Response schemas and examples
- Using `swagger-ui-express` middleware

**Example Schema:**
```javascript
User: {
  type: 'object',
  properties: {
    id: { type: 'integer', example: 1 },
    name: { type: 'string', example: 'Alice Anderson' },
    role: { type: 'string', example: 'admin' },
  },
}
```

---

### 3. GraphQL API

GraphQL endpoint available at: `http://localhost:3000/graphql`

**File:** `graphql/schema.js`

**Key Concepts Learned:**
- Schema Definition Language (SDL)
- Type definitions (User, Post, Contact)
- Query resolvers
- Nested data fetching (Post → Author)

**Example Queries:**

```graphql
# Get all users
query {
  users {
    id
    name
    role
  }
}

# Get user by ID
query {
  user(id: 1) {
    name
    role
  }
}

# Get posts with author info
query {
  posts {
    id
    title
    author {
      name
    }
  }
}

# Get contact info
query {
  contact {
    email
    phone
  }
}
```

**Testing GraphQL:**
Use tools like Postman, Insomnia, or curl:
```bash
curl -X POST http://localhost:3000/graphql \
  -H "Content-Type: application/json" \
  -d '{"query": "{ users { id name } }"}'
```

---

### 4. Winston Logger

Structured logging with timestamps for debugging and monitoring.

**File:** `logger.js`

**Key Concepts Learned:**
- Creating custom loggers
- Log levels (info, warn, error)
- Custom log format with timestamps
- Transport configuration (Console)

**Log Output Example:**
```
2025-11-29T12:00:00.000Z [info] GET / - home route hit
2025-11-29T12:00:01.000Z [warn] GET /users/999 - user not found
```

**Usage in Controllers:**
```javascript
const logger = require('./logger');

logger.info('GET /users - returning demo users');
logger.warn(`User ${id} not found`);
```

---

### 5. Jest Testing

Unit tests for API endpoints using Jest and Supertest.

**File:** `test/server.test.js`

**Key Concepts Learned:**
- Writing test suites with `describe()`
- Test cases with `it()`
- HTTP testing with Supertest
- Assertions with `expect()`

**Running Tests:**
```bash
npm test
```

**Example Test:**
```javascript
describe('GET /users', () => {
  it('should return list of users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
```

---

## 📋 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| `npm start` | `node server.js` | Run production server |
| `npm run dev` | `nodemon server.js` | Run with auto-reload |
| `npm test` | `jest` | Run test suites |

---

## 🔗 API Endpoints Summary

### REST API
- **Base URL:** `http://localhost:3000`
- **Swagger Docs:** `http://localhost:3000/docs`

### GraphQL API
- **Endpoint:** `http://localhost:3000/graphql`
- **Method:** POST (with JSON body)

---

## 📖 What I Learned

1. **Express.js** - How to structure a Node.js web server with routes and controllers
2. **Swagger** - How to document APIs using OpenAPI spec and serve interactive docs
3. **GraphQL** - How to create flexible APIs with schemas and resolvers
4. **Logging** - Importance of structured logging for debugging and monitoring
5. **Testing** - Writing automated tests to ensure API reliability
6. **Project Structure** - Organizing code with MVC pattern for maintainability

---

## 🔮 Future Improvements

- [ ] Add database integration (MongoDB/PostgreSQL)
- [ ] Implement authentication (JWT)
- [ ] Add input validation (Joi/Zod)
- [ ] Create GraphQL mutations
- [ ] Add error handling middleware
- [ ] Implement rate limiting
- [ ] Add Docker support

---

## 📝 License

This project is for educational purposes. Feel free to use it for learning!

