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
        description: "I am second year student of Bachelor of Tecnology in Computer Science Engineering at Indian Institute of Information Technology Una. I am Frontend Developer and Competitive Programmer and having interest in Artificial Intelligence and Data Science",
        highlights:{
            bullets:[
                "Frontend Web Development",
                "React Framework",
                "Managing Database",
                "Data Visualization and Cleaning",
                "3 ⭐ at Codechef",
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
                        <a href='Varun_Prohit-Resume.pdf' download='Varun_Prohit-Resume.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
