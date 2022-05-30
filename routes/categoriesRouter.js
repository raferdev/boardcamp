import express from "express";
import getCategoriesCtlr from "../controllers/categories/getCategoriesCtlr.js";
import postCategoriesCtlr from "../controllers/categories/postCategoriesCtlr.js";

import postCategoriesCheckDupplicatesMdw from "../middlewares/categories/postCategoriesCheckDupplicatesMdw.js";
import postCategoriesSchemaMdw from "../middlewares/categories/postCategoriesSchemaMdw.js";

const categoriesRouter = express.Router();

categoriesRouter.get("/categories",getCategoriesCtlr);
categoriesRouter.post("/categories",postCategoriesSchemaMdw,postCategoriesCheckDupplicatesMdw,postCategoriesCtlr);

export default categoriesRouter;