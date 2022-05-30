import express from "express";
import deleteRentalsCtlr from "../controllers/rentals/deleteRentalsCtlr.js";
import getRentalsCtlr from "../controllers/rentals/getRentalsCtlr.js";
import postRentalsCtlr from "../controllers/rentals/postRentalsCtlr.js";
import postRentalsIdCtlr from "../controllers/rentals/postRentalsIdCtlr.js";
import rentalsPostCheckIdMdw from "../middlewares/rentals/rentalsPostCheckIdMdw.js";
import rentalsPostCheckMdw from "../middlewares/rentals/rentalsPostCheckMdw.js";
import rentalsPostCheckReturnMdw from "../middlewares/rentals/rentalsPostCheckReturnMdw.js";

const rentalsRouter = express.Router();

rentalsRouter.get("/rentals",getRentalsCtlr);
rentalsRouter.post("/rentals",rentalsPostCheckMdw,postRentalsCtlr);
rentalsRouter.post("/rentals/:id/return",rentalsPostCheckIdMdw,rentalsPostCheckReturnMdw,postRentalsIdCtlr)
rentalsRouter.delete("/rentals/:id",rentalsPostCheckIdMdw,rentalsPostCheckReturnMdw,deleteRentalsCtlr);

export default rentalsRouter;