import React from 'react'
import Typical from 'react-typical';
import './Profile.css';
import ScrollService from '../../../utility/ScrollService';
export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            
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
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {""}
                            Hello, I'm {" "}
                            <span className='highlighted-text'>
                                Varun
                            </span>
 
                        </span>
                    </div>
                    <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                         <Typical
                             loop ={Infinity}
                             steps = {[
                                 "Enthusiastic Dev",
                                 1000,
                                 "Full Stack Developer",
                                 1000,
                                 "Competitive Programmer",
                                 1000,
                                 "ML Enthusiastic",
                                 1000,
                             ]}
                         />
                        </h1>
                        <span className='profile-role-tagline'>
                        “Code is like humor. When you have to explain it, it’s bad”
                        </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn' onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                            {""}
                            Hire Me{" "} 
                        </button>
                        <a href='https://bit.ly/varun-prohit_resume' download='Varun_Prohit-Resume.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
            
        </div>
    )
}
