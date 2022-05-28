import express from "express";
import getGamesCtlr from "../controllers/games/getGamesCtlr.js";
import postGamesCtlr from "../controllers/games/postGamesCtlr.js";

const gamesRouter = express.Router();

gamesRouter.get("/games",getGamesCtlr);
gamesRouter.post("/games",postGamesCtlr);

export default gamesRouter;