import express from "express";
import getRootController from "../controllers/root/getRootController.js";

const rootRouter = express.Router();

rootRouter.get("/", getRootController);

export default rootRouter;
