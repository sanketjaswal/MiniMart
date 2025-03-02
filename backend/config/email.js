import { createTransport } from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.ADMIN_EMAIL, // Admin email (sender)
    pass: process.env.ADMIN_EMAIL_PASSWORD, // App password (not normal password)
  },
});

const sendEmail = async (to, subject, text, html) => {
  try {
    await transporter.sendMail({
      from: `"Mini Mart - nyuc" <${process.env.ADMIN_EMAIL}>`,
      to,
      subject,
      text,
      html,
    });
    console.log("Email sent successfully");
  } catch (err) {
    console.error("Error sending email:", err);
  }
};

export default sendEmail;
