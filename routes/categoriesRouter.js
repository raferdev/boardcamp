import express from "express";
import getCategoriesCtlr from "../controllers/categories/getCategoriesCtlr.js";
import postCategoriesCtlr from "../controllers/categories/postCategoriesCtlr.js";

const categoriesRouter = express.Router();

categoriesRouter.get("/categories",getCategoriesCtlr);
categoriesRouter.post("/categories",postCategoriesCtlr);

export default categoriesRouter;