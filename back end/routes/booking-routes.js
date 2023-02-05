import express from 'express';
import { newBooking } from '../controllers/booking-contoller';

const bookingRouter = express.Router();

bookingRouter.post("/",newBooking);


export default bookingRouter;