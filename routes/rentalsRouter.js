import express from "express";
import deleteRentalsCtlr from "../controllers/rentals/deleteRentalsCtlr.js";
import getRentalsCtlr from "../controllers/rentals/getRentalsCtlr.js";
import postRentalsCtlr from "../controllers/rentals/postRentalsCtlr.js";
import postRentalsIdCtlr from "../controllers/rentals/postRentalsIdCtlr.js";
import rentalsPostCheckIdMdw from "../middlewares/rentals/rentalsPostCheckIdMdw.js";
import rentalsPostCheckMdw from "../middlewares/rentals/rentalsPostCheckMdw.js";
import rentalsPostCheckReturnMdw from "../middlewares/rentals/rentalsPostCheckReturnMdw.js";
import rentalsPostSchemaMdw from "../middlewares/rentals/rentalsPostSchemaMdw.js";
import rentalsPostStockCheckMdw from "../middlewares/rentals/rentalsPostStockCheckMdw.js";

const rentalsRouter = express.Router();

rentalsRouter.get("/rentals",getRentalsCtlr);
rentalsRouter.post("/rentals",rentalsPostSchemaMdw,rentalsPostCheckMdw,rentalsPostStockCheckMdw,postRentalsCtlr);
rentalsRouter.post("/rentals/:id/return",rentalsPostCheckIdMdw,rentalsPostCheckReturnMdw,postRentalsIdCtlr)
rentalsRouter.delete("/rentals/:id",rentalsPostCheckIdMdw,rentalsPostCheckReturnMdw,deleteRentalsCtlr);

export default rentalsRouter;