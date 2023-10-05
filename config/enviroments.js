import dotenv from "dotenv";

dotenv.config();
export const {
    APP_ENV,
    PAIS,
    PORT,
    PROYECTO,
    FRONTEND,
    MAILING_API_KEY_EMAIL,
    MAILING_EMAIL_SIGNIN,
} = process.env;
