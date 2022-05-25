import express from "express";
import cors from "cors";
import "dotenv/config"
import rootRouter from "./routes/rootRouter.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(rootRouter);

app.listen(process.env.PORT)