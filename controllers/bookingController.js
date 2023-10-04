// controllers/bookingController.js

const Booking = require('../models/booking');

// Create a new booking
exports.createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    return res.status(201).json(booking);
  } catch (error) {
    return res.status(400).json({ error: 'Booking creation failed' });
  }
};

// Get all bookings
exports.getAllBookings = async (req, res) => {
  const bookings = await Booking.findAll();
  return res.status(200).json(bookings);
};

exports.getBookingById = async (req, res) => {
    const { email } = req.params;
  
    try {
      const booking = await Booking.findByPk(email);
  
      if (!booking) {
        return res.status(404).json({ error: 'Booking not found' });
      }
  
      return res.status(200).json(booking);
    } catch (error) {
      return res.status(500).json({ error: 'Error fetching booking by Email' });
    }
  };

// Update a booking
exports.updateBooking = async (req, res) => {
  const { email } = req.params;
  const updatedBooking = req.body;

  try {
    const booking = await Booking.findByPk(email);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    await booking.update(updatedBooking);
    return res.status(200).json(booking);
  } catch (error) {
    return res.status(500).json({ error: 'Booking update failed' });
  }
};

// Delete a booking
exports.deleteBooking = async (req, res) => {
  const { email } = req.params;

  try {
    const booking = await Booking.findByPk(email);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    await booking.destroy();
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ error: 'Booking deletion failed' });
  }
};
