const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

// API endpoints
app.get('/api/items', (req, res) => {
  res.json({ message: 'GET all items' });
});

app.get('/api/items/:id', (req, res) => {
  res.json({ message: `GET item ${req.params.id}` });
});

app.post('/api/items', (req, res) => {
  res.json({ message: 'POST new item', data: req.body });
});

app.put('/api/items/:id', (req, res) => {
  res.json({ message: `PUT update item ${req.params.id}`, data: req.body });
});

app.delete('/api/items/:id', (req, res) => {
  res.json({ message: `DELETE item ${req.params.id}` });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});