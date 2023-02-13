require("dotenv").config
const router = require('express').Router()
const nodemailer = require('nodemailer')
const { Subject } = require('rxjs')
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

// const oauth2Client = new OAuth2(
//     process.env["CLIENTID"], //clientid
//     process.env["CLIENTSECRET"], //client secret
//     process.env["REDIRECTURL"] //redirect url
//   );
  // oauth2Client.setCredentials({
  //   refresh_token: process.env["REFRESHTOKEN"],
  // });
  //const accessToken = oauth2Client.getAccessToken();
  const smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      //type: "OAuth2",
      user: "20163@iiitu.ac.in",
      pass: process.env["PSWD"],
      // clientId: process.env["CLIENTID"],
      // clientSecret: process.env["CLIENTSECRET"],
      // refreshToken: process.env["REFRESHTOKEN"],
      // accessToken: accessToken,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
router.post('/contact',(req,res)=>{
    console.log(req.body)
    let data = req.body
    if(data.name.length===0 || data.email.length===0 || data.message.length===0)
    {
       return res.json({msg: "please fill all the fields"})
    }
    
      
    let mailOptions={
       from:data.email,
       to:'20163@iiitu.ac.in',
       subject:`message from $(data.name)`,
       html:`
       <h3>Information</h3>
       <ul>
       <li>Name: ${data.name}</li>
       <li>Email:${data.email}</li>
       </ul>
       <h3>Message</h3>
       <p>${data.message}</p>
       `
    }
    smtpTransport.sendMail(mailOptions, function (error, response) {
        if (error) {
          console.log(error);
          res.status(400).json({msg:"fill all field"})
        } else {
          console.log("Message sent: ");
          res.status(200).json({msg:"thanks for responding"})
          
        }
      });
    // smtpTransport.sendMail(mailOptions,async()=>
    // {
    //     try{
    //       if(error) res.status(400).json({msg:"fill all field"})
    //       else
    //       res.status(200).json({msg:"thanks for responding"})
    //     }catch(error)
    //     {
    //         if(error) return res.status(500).json({msg: "testing"})
    //         console.log(error)
    //     }
    // })
})
//console.log(process.env.PSWD)

// module.exports=router