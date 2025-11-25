const demoUsers = [
  { id: 1, name: 'Alice Anderson', role: 'admin' },
  { id: 2, name: 'Bob Brown', role: 'editor' },
  { id: 3, name: 'Charlie Clark', role: 'viewer' },
];

const demoPosts = [
  { id: 101, title: 'Getting started with Node.js', authorId: 1 },
  { id: 102, title: 'Express routing tips', authorId: 2 },
  { id: 103, title: 'Understanding middleware', authorId: 1 },
];

module.exports = {
  demoUsers,
  demoPosts,
};

