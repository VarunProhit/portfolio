const router = require('express').Router()
const nodemailer = require('nodemailer')
const { Subject } = require('rxjs')

router.post('/contact',(req,res)=>{
    let data = req.body
    if(data.name.length===0 || data.email.length===0 || data.message.length===0)
    {
       return res.json({msg: "please fill all the fields"})
    }
    let smtpTransporter = nodemailer.createTransport({
        service: 'Gmail',
        port:465,
        auth:{
            user:'20163@iiitu.ac.in',
            pass:'Jerry1234'
        }
    })
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
    smtpTransporter.sendMail(mailOptions,()=>
    {
        try{
          if(error) res.status(400).json({msg:"fill all field"})
          res.status(200).json({msg:"thanks for responding"})
        }catch(error)
        {
            if(error) return res.status(500).json({msg: "there is error"})
        }
    })
})

module.exports=router