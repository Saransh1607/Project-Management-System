import nodemailer from "nodemailer";
import config from "config";
// import fs from "fs/promises";

const { HOST, AUTH, PORT } = config.get("EMAIL_SMTP");

async function sendMail(emailData) {
  try {
    const transporter = nodemailer.createTransport({
      host: HOST,
      port: PORT,
      auth: AUTH,
    });

    let info = await transporter.sendMail({
      from: `"Test Solutions" <shaik@gmail.com>`,
      subject: emailData.subject, // Subject line
      to: emailData.to,
      html: emailData.body,
    });

    console.log("EMAIL SENT");
    console.log("Message sent: %s", info.messageId);

    // Optionally log the email messageId to a file
    // await fs.appendFile("logs/emaillogs.txt", `${info.messageId}\n`);
  } catch (error) {
    console.log("err", error);
  }
}

// Example usage (uncomment and customize if needed)
// sendMail({
//     subject: "User Account Verification - Test",
//     to: "user@example.com",
//     body: "<p>Your verification code is <strong>123456</strong></p>"
// });

export default sendMail;
