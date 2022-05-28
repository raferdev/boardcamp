import express from "express";
import getRootCtlr from "../controllers/root/getRootCtlr.js";

const rootRouter = express.Router();

rootRouter.get("/", getRootCtlr);

export default rootRouter;
