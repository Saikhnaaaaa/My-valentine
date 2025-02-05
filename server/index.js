import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

// function sendEmail({ email, subject, message }) {
//   return new Promise((resolve, reject) => {
//     var transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: "t.saikhann99@gmail.com",
//         pass: "Bilgeee!99",
//       },
//     });

//     const mail_config = {
//       from: "t.saikhann99@gmail.com",
//       to: "t.saikhann99@gmail.com",
//       subject: subject,
//       text: message,
//     };

//     transporter.sendMail(mail_config, function (error, info) {
//       if (error) {
//         console.log(error);
//         return reject(error);
//       } else {
//         resolve(info);
//       }
//     });
//   });
// }

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_MAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

app.post("/sendEmail", (req, res) => {
  const { textYes } = req.body;

  console.log("productName ", textYes);

  var mailOptions = {
    from: process.env.SMTP_MAIL,
    to: process.env.TO_EMAIL,
    subject: "ecommerce",
    text: "Тиймээ, валентинаар уулзая",
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (!err) {
      res.json({ status: "Ok", data: info });
    } else {
      res.json({ status: "Error Email", data: "Something error in email" });
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
