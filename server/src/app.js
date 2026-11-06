const express = require('express');
const healthRoutes = require('./routes/health.routes');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', healthRoutes);

// 404 Handler - duhet të jetë në fund absolute
app.use((req, res, next) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found'
  });
});

module.exports = app;