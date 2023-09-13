import * as path from "path";

import {
  APP_ENV,
  PAIS,
  PORT,
  PROYECTO,
} from "./config/enviroments.js";

import express from "express";
import helmet from "helmet";
import http from "http";
import morgan from "morgan";
import { rateLimit } from "express-rate-limit";

export const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(
  helmet({
    contentSecurityPolicy: APP_ENV === "development" ? false : undefined,
    crossOriginEmbedderPolicy: APP_ENV === "development" ? false : true,
  })
);
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Exceso de solicitudes. Por favor, inténtalo de nuevo más tarde.",
  })
);
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "public") });
});

const httpServer = http.createServer(app);

if (APP_ENV === "development") {
  app.listen(PORT || 3000);
  console.log(`
 App: ${PROYECTO}
 Country: ${PAIS}
 Enviroment: ${APP_ENV}
 Port: ${PORT}
 Date: ${new Date()}`);
}

export default httpServer;
