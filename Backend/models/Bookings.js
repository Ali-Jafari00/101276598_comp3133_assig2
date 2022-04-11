const mongoose = require('mongoose');
const BookingSchema = new mongoose.Schema({
  booking: {
    type: String,
    required: true,
  },
  booking_id: {
    type: String,
    required: true,
  },
  booking_date: {
    type: String,
    required: true
  },
  booking_start: {
    type: String,
    required: true,
  },
  booking_end: {
    type: String,
    required: true,
  },
  postal_code: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  username: {
    type: String,
    required: true,
      }
});



const Bookings = mongoose.model("Bookings", BookingSchema);
module.exports = Bookings;