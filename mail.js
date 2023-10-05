import {
    MAILING_API_KEY_EMAIL,
    MAILING_EMAIL_SIGNIN,
} from "./config/enviroments.js";
  
  import { MailService } from "@sendgrid/mail";
  
  const sgMail = new MailService();
  sgMail.setApiKey();
  export const sendMail = async ({ email, key, subject, text, html, from }) => {
    if (key) sgMail.setApiKey(key);
    else sgMail.setApiKey(MAILING_API_KEY_EMAIL);
    const msg = {
      to: email,
      from: from ? from : MAILING_EMAIL_SIGNIN,
      subject,
      text,
      html,
    };
    try {
      return await sgMail.send(msg);
    } catch (error) {
      return false;
    }
  };
  
  
