const Booking = require('./bookevent');

// create new booking
exports.createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).json({ message: "Booking created successfully", booking });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// list all bookings (optional, for admin)
exports.listBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
