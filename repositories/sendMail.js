import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const { MAIL_USER: userMail, MAIL_PASSWORD: userPassword } = process.env;

export async function sendVerificationMail(email, verificationToken) {
  const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
      user: userMail,
      pass: userPassword,
    },
  });
  const sendMail = async (options) => {
    try {
      await transporter.sendMail(options);
    } catch (error) {
      console.error(error);
    }
  };
  const mailOptions = {
    from: process.env.MAIL_USER,
    to: email,
    subject: "Authorization",
    text: `Welcome, thank you for choosing our services. Please verify your account by visiting http://localhost:3000/api/users/verify/${verificationToken}`,
    html: `<h2>Hello!</h2><br/>Please verify your account by clicking <a href="http://localhost:3000/api/users/verify/${verificationToken}">here</a>!`,
  };
  await sendMail(mailOptions);
}
