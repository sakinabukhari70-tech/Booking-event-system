const express = require('express');
const router = express.Router();
const bookingController = require('./bookeventcontroller');

// POST route for new booking
router.post('/', bookingController.createBooking);

// GET route to view all bookings (optional)
router.get('/', bookingController.listBookings);

module.exports = router;
