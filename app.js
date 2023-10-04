// app.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const bookingRoutes = require('./routes/bookingRoutes');
const sequelize = require('./models/booking'); // Import the Sequelize instance

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/bookings', bookingRoutes);

// Sync the database schema with the models
sequelize.sync().then(() => {
  console.log('Database synced');
}).catch(err => {
  console.error('Error syncing database:', err);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
