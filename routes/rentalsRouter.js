import express from "express";
import deleteRentalsCtlr from "../controllers/rentals/deleteRentalsCtlr.js";
import getRentalsCtlr from "../controllers/rentals/getRentalsCtlr.js";
import postRentalsCtlr from "../controllers/rentals/postRentalsCtlr.js";
import postRentalsIdCtlr from "../controllers/rentals/postRentalsIdCtlr.js";
import putRentalsCtlr from "../controllers/rentals/putRentalsCtlr.js";
import rentalsPostCheckMdw from "../middlewares/rentalsPostCheckMdw.js";

const rentalsRouter = express.Router();

rentalsRouter.get("/rentals",getRentalsCtlr);
rentalsRouter.post("/rentals",rentalsPostCheckMdw,postRentalsCtlr);
rentalsRouter.post("/rentals/:id/return",postRentalsIdCtlr)
rentalsRouter.delete("/rentals/:id",deleteRentalsCtlr);
rentalsRouter.put("/rentals/:id",putRentalsCtlr);

export default rentalsRouter;