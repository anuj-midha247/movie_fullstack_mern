import express from 'express';
import { addMovie, getAllMOvies, getMOvieById } from '../controllers/movie-contollers';

const movieRouter = express.Router();

movieRouter.get("/", getAllMOvies);

movieRouter.get("/:id",getMOvieById);

movieRouter.post("/",addMovie);


export default movieRouter;