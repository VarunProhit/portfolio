import React from 'react'
import Typical from 'react-typical';
import './Profile.css';

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            
                        <a href='a'>
                            <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='a'>
                            <i className='fa fa-google-plus-square'></i>
                        </a>
                        <a href='a'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='a'>
                            <i className='fa fa-youtube-square'></i>
                        </a>
                        <a href='a'>
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
                                 "Enthisiastic Dev",
                                 1000,
                                 "Front End Developer",
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
                        <button className='btn primary-btn'>
                            {""}
                            Hire Me{" "}
                        </button>
                        <a href='Varun_Prohit-Resume.pdf' download='Varun_Prohit-Resume.pdf'>
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
