import React, { useEffect } from 'react'
import ScreenHeading from '../../utility/ScreenHeading/ScreenHeading'
import ScrollService from '../../utility/ScrollService'
import Animation from '../../utility/Animation'
import { render } from '@testing-library/react'
import "./AboutMe.css";
export default function AboutMe(props) {
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen !== props.id)
        return;
        Animation.animation.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTANTS={
        description: "I am Varun Prohit. I am currently pursuing a bachelor's degree in computer science engineering at Indian Institute of Information Technology Una. I have good knowledge of computer fundamentals including operating systems, networking, database management systems and object oriented programming. I am a coordinator of the Forum of Computer Engineers (FORCE club). I am working  as a problem settler in Meraki, the technical fest  of our college and also worked as Event Organizer in Techtatva, an inter college event organized by AAVESH club of our college in which approximately 500 engineering students took part in various events. I am also an active member of EPMOC (event management club) which develops my soft skills including leadership, teamwork and communication.",
        highlights:{
            bullets:[
                "Data Structure and Algorithms",
                "Full Stack Development",
                "React Framework",
                "Database Management",
                "Machine Learning",
                "Deep Learning Specialization Certificate by Andrew NG",
                "2627th Position at Google Kickstart(Round H)",
            ],
            heading:"Here are a Few Highlights:"
        }
       
    }
    const renderHighlights=()=>
    {
        return(
            SCREEN_CONSTANTS.highlights.bullets.map((value,i)=>(
                <div className='highlight' key={i}>
                    <div className='highlight-blob'></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }
    return (
        <div className='about-me-container screen-container' id={props.id || ""}>
            
            <div className='about-me-parent'>
                <ScreenHeading title={'About Me'} subHeading={'Why Choose Me'}></ScreenHeading>
           
            <div className='about-me-card'>
                <div className='about-me-profile'></div>
                <div className='about-me-details'>
                    <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
                    <div className='about-me-highlight'>
                        <div className='highlight-heading'>
                            <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                        </div>
                        {renderHighlights()}
                    </div>
                    <div className='about-me-options'>
                    <button className='btn primary-btn' onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                            {""}

                            Hire Me{" "} 
                        </button>
                        <a href='https://bit.ly/varun-prohit_resume' download='Varun_Prohit-Resume.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
