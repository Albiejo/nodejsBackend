const { buildSchema } = require('graphql');
const { demoUsers, demoPosts } = require('../data/demoData');

const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    role: String!
  }

  type Post {
    id: ID!
    title: String!
    authorId: ID!
    author: User
  }

  type Contact {
    email: String!
    phone: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    posts: [Post!]!
    contact: Contact!
  }
`);

const rootResolver = {
  users: () => demoUsers,
  user: ({ id }) => demoUsers.find((item) => item.id === Number(id)),
  posts: () =>
    demoPosts.map((post) => ({
      ...post,
      author: demoUsers.find((user) => user.id === post.authorId),
    })),
  contact: () => ({ email: 'contact@example.com', phone: '+1-555-0100' }),
};

module.exports = {
  schema,
  rootResolver,
};

