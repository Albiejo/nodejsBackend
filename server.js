// server.js
const express = require('express');
const app = express();
const port = 3000; // You can change the port as needed

// Route 1: Home Page
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

// Route 2: About Page
app.get('/about', (req, res) => {
  res.send('This is the About Page!');
});

// Route 3: Contact Page
app.get('/contact', (req, res) => {
  res.send('Contact us at contact@example.com always');
});


module.exports  = app;


if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}