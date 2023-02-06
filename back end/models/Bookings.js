import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    movie: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref:"Movie",
    },
    date: {
        type: Date,
        required: true,
    },
    seatNumber: {
        type: Number,
        required: true,
    },
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref:"User",
    },
});


export default mongoose.model("Booking", bookingSchema);