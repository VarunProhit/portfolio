import React,{useState} from 'react'
import Typical from 'react-typical'
import axios from 'axios'
import {toast} from 'react-toastify'
import imgBack from '../../../src/assets/images/mailz.jpeg'
import load1 from '../../../src/assets/images/load2.gif'
import ScreenHeading from '../../utility/ScreenHeading/ScreenHeading'
import ScrollService from '../../utility/ScrollService'
import Animation from '../../utility/Animation'
import './ContactMe.css'
// require("dotenv").config
export default function ContactMe(props) {
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen !== props.id)
        return;
        Animation.animation.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    
   const [name,setName]=useState("")
   const [email,setEmail]=useState("")
   const [message,setMessage]=useState("")
   const [banner,setBanner]=useState("")
   const [bo,setBo]=useState(false)

   const handleName =(e)=>
   {
       setName(e.target.value);
   }
   const handleEmail =(e)=>
   {
       setEmail(e.target.value);
   }
   const handleMessage =(e)=>
   {
       setMessage(e.target.value);
   }
   const submitForm =async(e)=>
   {
       e.preventDefault();
       try{
        let data={
            name,
            email,
            message
        };
        setBo(true);
        const res = await axios.post(`http://localhost:5000/contact`,data)
        console.log(res)
        if(name.length===0 || email.length===0 || message.length===0)
        {  
            setBanner(res.data.msg)
            toast.error(res.data.msg)
            setBo(false)
        }else if(res.status===200)
        {
            setBanner(res.data.msg)
            toast.success(res.data.msg)
            setBo(false)
            console.log(name)
        }
       } catch(error)
       {
           console.log(error)
           setBo(false)
       }
   }

  return (
    <div className="main-container" id={props.id||''}>
       <ScreenHeading
       subHeading={"Lets Keep In Touch"}
       title={'Contact Me'}
       ></ScreenHeading>
       <div className='central-form'>
           <div className='col'>
           <h2 className='title'>
                         <Typical
                             loop ={Infinity}
                             steps = {[
                                 "Get In Touch",
                                 1000,  
                             ]}
                         />
                        </h2>
                        <a href='https://www.facebook.com/varun.prohit.9/'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='https://www.linkedin.com/in/varun-prohit-a33939201/'>
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        <a href='https://www.instagram.com/varunprohit/'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='https://www.github.com/VarunProhit/'>
                            <i className='fa fa-github'></i>
                        </a>
                        <a href='https://www.twitter.com/prohitvarun/'>
                            <i className='fa fa-twitter-square'></i>
                        </a>
           </div>
           <div className='back-form'>
               <div className='img-back'>
                   <h4>Send Your Email Here!</h4>
                   <img src={imgBack} alt='img not fount'></img>
               </div>
               <form onSubmit={submitForm}>
                   <p>{banner}</p>
                   <label htmlFor='name'>Name</label>
                   <input type='text' onChange={handleName} value={name}/>

                   <label htmlFor='email'>Email</label>
                   <input type='email'onChange={handleEmail} value={email}/>
                   <label htmlFor='message'>Message</label>
                   <textarea type='text'onChange={handleMessage} value={message}/>
                  <div className='send-btn'>
                      <button type='submit'>send<i className='fa fa-paper-plane'></i>
                      {/* <img src={load1} alt='error'/> */}
                      {bo&&(<b className='load'><img src={load1} alt='error'/></b>)}
                      </button>
                  </div>
               </form>
           </div> 
       </div>
    </div>
  )
}
