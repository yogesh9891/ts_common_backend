import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";

import { errorHandler } from "./middlewares/errorHandler.middleware";

const app = express();

import v1Router from "./v1/router.v1";

app.use(cors());
app.set("trust proxy", true);

app.use(logger("dev"));
app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ extended: false, limit: "500mb" }));
app.use(cookieParser());
app.use(express.static(path.join(process.cwd(), "public")));

app.use("/v1", v1Router);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(errorHandler);

export default app;
