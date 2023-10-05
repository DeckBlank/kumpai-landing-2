import * as path from "path";

import {
  APP_ENV,
  FRONTEND,
  PAIS,
  PORT,
  PROYECTO,
} from "./config/enviroments.js";

import express from "express";
import helmet from "helmet";
import http from "http";
import morgan from "morgan";

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
/* app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Exceso de solicitudes. Por favor, inténtalo de nuevo más tarde.",
  })
); */
app.use(express.static("public"));
app.get("/", (req, res) => {
  // METHOD TO BIDING FRONTEND URL
  res.sendFile("index.html", { root: path.join(__dirname, "public") });
});
app.get("/app", (req, res) => {
  res.redirect(FRONTEND);
});
app.get("/*", (req, res) => {
  res.redirect("/");
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

/* import { sendMail } from './mail.js';

const names = "Pedro";
const email  = "pedro@email.com";
const  url = "hola";

sendMail({
  email: "disenador.uxui@mablovers.com",
  subject: "Hello",
  text: "Hello world",
  html: `
  <!DOCTYPE html>
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
    xmlns:v="urn:schemas-microsoft-com:vml"
  >
  <head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      
      
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap" rel="stylesheet">
  
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap" rel="stylesheet">
  
      <title>kind</title>
  </head>
  <style type="text/css">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  
  * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      text-decoration: none;
      list-style: none;
      font-family: 'Montserrat', sans-serif;  
  }
  
  html {
      font-size: 62.5%;
  }
  .body{
      background-color: #00B4C1;
  }
  
  
  header{
      height: 200px;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin-top: 50px;
  }
  
  .logo{
      width: 18%;
      display: flex;
      align-items: center;
      justify-content: start;
  }
  
  main{
      margin-top: 20px;
      margin-left: 10%;
      margin-right: 10%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      color:#F9F6F2 ;
      gap: 10px;
      
  }
  
  h2{
      font-family: 'Roboto Condensed', sans-serif; 
      text-transform: uppercase; 
  }
  
  a{
      background: #DF1E44;
      min-width: 200px;
      cursor: pointer;
      border: none;
      padding: 16px 32px;
      color: azure;
      font-size: 24px;
      font-weight: bold;
      position: relative;
      border-radius: 12px;
      margin-top: 20px;
      margin-bottom: 20px;
  }
  
  span{
      font-weight: bold;
      font-size: 22px;
      color: #DF1E44;
  }
  
  a:hover::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, white, rgb(104, 227, 251), white, rgb(104, 227, 251), white, rgb(104, 227, 251), white, rgb(68, 224, 255));
      background-size: 800%;
      border-radius: 12px;
      filter: blur(8px);
      animation: glowing 20s linear infinite;
  }
  
  @keyframes glowing {
      0% {
          background-position: 0 0;
      }
      50% {
          background-position: 400% 0;
      }
      100% {
          background-position: 0 0;
      }
  }
  
  @media (max-width: 768px) {
      main{
          font-size: 18px;
      }
  }
  
  @media (max-width: 400px) {
      main{
          font-size: 16px;
      }
  }
  </style>
  <body>
      <header>
          <img class="logo" src="https://i.postimg.cc/xTHbPnkS/Logo-Kind-06.png" />
      </header>
      <main>
          <h2>Hola, ${names}</h2>
          <p>Te invitamos a registrarte en la plataforma 
              Kind con tu correo ${email}.
          </p>
          <p>
              Para que  puedas confirmar tu correo y generar tu contraseña ñeñas
          </p>
          <a href="${url}">Click aquí</a>
          <p>
              Si en caso no has podido generar tu contraseña comunicate <br> al correo:  <span>contacto@mablover.com </span>y te enviaremos un nuevo enlace.
          </p>
      </main>
  </body>
  </html>
  `,
}) */

