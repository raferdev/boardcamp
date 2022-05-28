import express from "express";
import deleteRentalsCtlr from "../controllers/rentals/deleteRentalsCtlr.js";
import getRentalsCtlr from "../controllers/rentals/getRentalsCtlr.js";
import postRentalsCtlr from "../controllers/rentals/postRentalsCtlr.js";
import postRentalsIdCtlr from "../controllers/rentals/postRentalsIdCtlr.js";

const rentalsRouter = express.Router();

rentalsRouter.get("/rentals",getRentalsCtlr);
rentalsRouter.post("/rentals",postRentalsCtlr);
rentalsRouter.post("/rentals/:id/return",postRentalsIdCtlr)
rentalsRouter.delete("/rentals/:id",deleteRentalsCtlr);

export default rentalsRouter;