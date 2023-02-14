const express = require("express");
const nodemailer = require("nodemailer");
const router = require('express').Router()
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json())
require("dotenv").config();
const { Subject } = require('rxjs')
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const loginroute=require("./route/contactRoute")
app.use("/",loginroute)
const port = process.env.port || 5000;

if (process.env.NODE_ENV === "production") {
	app.use(express.static("build"));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "build", "index.html"));
	}); 
}
app.listen(port, () => {
	console.info(`Server started at port ${port}`);
});
// app.listen(port, () => {
//  console.log(`Server is running on port: ${port}`);
// });


// let transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     type: "OAuth2",
//     user: process.env.EMAIL,
//     pass: process.env.WORD,
//     clientId: process.env.OAUTH_CLIENTID,
//     clientSecret: process.env.OAUTH_CLIENT_SECRET,
//     refreshToken: process.env.OAUTH_REFRESH_TOKEN,
//   },
//  });
//  transporter.verify((err, success) => {
//   err
//     ? console.log(err)
//     : console.log(`=== Server is ready to take messages: ${success} ===`);
//  });

// app.post("/contact", function (req, res) {
//   console.log(req.body)
//     let data = req.body
//     console.log(data.name)
//     if(data.name.length===0 || data.email.length===0 || data.message.length===0)
//     {
//        return res.json({msg: "please fill all the fields"})
//     }

//   let mailOptions = {
//     // from: "test@gmail.com",
//     // to: process.env.EMAIL,
//     // subject: "Nodemailer API",
//     // text: "Hi from your nodemailer API",
//        from:data.email,
//        to: process.env.EMAIL,
//        subject:`message from $(data.name)`,
//        html:`
//        <h3>Information</h3>
//        <ul>
//        <li>Name: ${data.name}</li>
//        <li>Email:${data.email}</li>
//        </ul>
//        <h3>Message</h3>
//        <p>${data.message}</p>
//        `
//   };
 
//   transporter.sendMail(mailOptions, function (err, data) {
//     if (err) {
//       console.log("Error " + err);
//     } else {
//       console.log("Email sent successfully");
//       res.json({ status: "Email sent" });
//     }
//   });
//  });