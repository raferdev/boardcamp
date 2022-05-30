import express from "express";
import getGamesCtlr from "../controllers/games/getGamesCtlr.js";
import postGamesCtlr from "../controllers/games/postGamesCtlr.js";

import postGamesCheckDbMdw from "../middlewares/games/postGamesCheckDbMdw.js";
import postGamesSchemaMdw from "../middlewares/games/postGamesSchemaMdw.js";

const gamesRouter = express.Router();

gamesRouter.get("/games",getGamesCtlr);
gamesRouter.post("/games",postGamesSchemaMdw,postGamesCheckDbMdw,postGamesCtlr);

export default gamesRouter;