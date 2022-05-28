import express from "express";
import cors from "cors";
import "dotenv/config"
import rootRouter from "./routes/rootRouter.js";
import categoriesRouter from "./routes/categoriesRouter.js";
import customersRouter from "./routes/customersRouter.js";
import gamesRouter from "./routes/gamesRouter.js";
import rentalsRouter from "./routes/rentalsRouter.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(rootRouter);
app.use(categoriesRouter);
app.use(customersRouter);
app.use(gamesRouter);
app.use(rentalsRouter);

app.listen(process.env.PORT)