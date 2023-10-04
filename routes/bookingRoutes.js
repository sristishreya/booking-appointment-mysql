// routes/userRoutes.js
const path = require('path');
const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.get('/create', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/create.html'));
  });

  router.get('/:email', bookingController.getBookingById);
// Create a new booking
router.post('/', bookingController.createBooking);

// Get all booking
router.get('/', bookingController.getAllBookings);

// Update a booking
router.put('/:email', bookingController.updateBooking);

// Delete a booking
router.delete('/:email', bookingController.deleteBooking);

module.exports = router;
