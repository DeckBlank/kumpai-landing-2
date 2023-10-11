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
 <body>
 <head>
  <title>
  </title>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap" rel="stylesheet">

  <style>
     * {
         font-family: 'Montserrat', sans-serif;  
        .container{
            background-color: #00B4C1; 
            text-align: center;
        }
        header{
            padding: 40px;
            height: 30%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
   
        .logo{
            width: 18%;
            margin-top: 80px;
        }
   
        .main{
            margin-top: 20px;
            margin-left: 10%;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            color:#F9F6F2 ;
       }
   
        h2{
            margin-top: 50px;
            font-family: 'Roboto Condensed', sans-serif; 
            text-transform: uppercase; 
        }
        p{
            color:white;
            flex-direction: column;
            gap: 10px;
        }
        .text{
            margin: 20px;
        }
   
        .ptb20{
            padding-bottom: 20px;
        }
   
        .ptt20{
            padding-top: 20px;
        }
        .button{
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
            font-size: 16px;
            color: #DF1E44;
        }
   
     </style>
    </head>
    <table  class="container" role="presentation" style="width:100%;border:0;border-collapse:collapse;border-spacing:0;">
        <tr class="header">
            <td class="upcoming-promotion-text">
                <img class="logo" src="https://i.postimg.cc/J0ztmw5T/Logo-Kind-07.png" />
            </td>
        </tr>
        <tr class="main">
            <td class="containerMain"  style="padding: 20px 0 90px 0; color:#EEFBFB; font-size: 12px;">
                <h2 style=" font-family: Arial, sans-serif; text-decoration: none;" href="#">Hola, ${names}</h2>
                <p class="text" style="font-family: Arial, sans-serif;">
                    Te invitamos a registrarte en la plataforma </p> 
                <p class="text" style="font-family: Arial, sans-serif;">Kind con tu correo ${email}. </p>
                <p class="text ptb20" style="font-family: Arial, sans-serif;">Para que  puedas confirmar tu correo y generar tu contraseña has</p>
                <a ref="${url}" class="button" style=" font-family: Arial, sans-serif; text-decoration: none;" >Click aquí</a>
                <p class="text ptt20">Si en caso no has podido generar tu contraseña comunicate <br> al correo:  <span>contacto@mablover.com </span>y te enviaremos un nuevo enlace.</p>
            </td>
        </tr>
    </table>
   </body>
    `,
   }) */
