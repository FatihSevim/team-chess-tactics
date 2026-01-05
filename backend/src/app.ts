import express = require("express");
import type { Application, Request, Response } from "express";
import routes from "./routes/routes";
import { errorHandler } from "./middlewares/errorHandler";
const cors = require("cors");

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/", routes);

app.use(errorHandler);

export default app;
