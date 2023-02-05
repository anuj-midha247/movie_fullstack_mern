import Bookings from "../models/Bookings";

export const newBooking = async (req, res, next) => {
    const { movie, date, seatNumber, user } = req.body;
    let booking;
    try {
        booking = new Bookings({ movie, date: new Date(`${date}`), seatNumber, user });
        booking = await booking.save();
    } catch (error) {
        return console.log(error);
    }
    if (!newBooking) {
        return res.status(500).json({ message: "Unable To Create A Booking" });
    }
    return res.status(201).json({ booking });
}