import React, { useState } from 'react';
import ScreenHeading from '../../utility/ScreenHeading/ScreenHeading'
import ScrollService from '../../utility/ScrollService'
import Animation from '../../utility/Animation';
import index from 'react-typical';
import './Resume.css';
export default function Resume(props) {
    const [selectByLeftIndex,setSelectByLeftIndex]=useState(0)
    const [carousalOffSetStyle,setCarousalOffSetStyle]=useState({})
     
    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen !== props.id)
        return;
        Animation.animation.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const ResumeHeading=(props)=>{
        return(
        <div className='resume-heading'>
             <div className='heading-bullet'></div>
            <div className='resume-main-heading'>
               
                    <span>{props.heading ? props.heading :''}</span>
                    {props.fromDate && props.toDate ?(
                     <div className='heading-date'> <span> {props.fromDate+"-"+ props.toDate}</span></div>) :(<div></div>)
                    }

                </div>
             <div className='resume-sub-heading'>
                 <span>{props.subHeading ? props.subHeading :''}</span>

             </div>
             <div className='resume-heading-description'>
                 <span>{props.description ? props.description :''}</span>
             </div>
            
        </div>
        )
    };
    const resumeBullet=[
        {label: "Education",logoSrc:"education.svg"},
        // {label: "Work Experience",logoSrc:"work-history.svg"},
        {label: "Programming Skills",logoSrc:"programming-skills.svg"},
        {label: "Projects",logoSrc:"projects.svg"},
        {label: "Interests",logoSrc:"interests.svg"}
    ]
    const programmingSkillDetails=[
        {skill: "C",ratingPercentage:85},
        {skill: "C++",ratingPercentage:85},
        {skill: "Python",ratingPercentage:65},
        {skill: "HTML5",ratingPercentage:75},
        {skill: "CSS3",ratingPercentage:75},
        {skill: "ReactJS",ratingPercentage:60},
        {skill: "Machine Learning",ratingPercentage:60},
        {skill: "MySQL",ratingPercentage:45},
        {skill: "Django",ratingPercentage:45},
        {skill: "Git/Github",ratingPercentage:45}
    ];
    const projectDetails=[
        {title:"Song Recommendation", duration:{fromDate:"Aug 2022",toDate:"Nov 2022"},description:"A sentiment analysis based ML model to recommend songs based on the users current state of emotion.",
        subHeading:"Technology Used: React JS, Python, TensorFlow, Google Colaboratory, Keras, API"},
        {title:"Scholorship-o-polis", duration:{fromDate:"Mar 2022",toDate:"May 2022"},description:"A web application which helps under-graduated medical and engineering students to get to know the details about the scholarships for which they are eligible.",
        subHeading:"Technology Used: React JS, Bootstarp"},
        {title:"Heart Stroke Prediction", duration:{fromDate:"Aug 2021",toDate:"Nov 2021"},description:"Analyzed the dataset of people regarding their health and predict their chance of heart stroke.",
        subHeading:"Technology Used: Python,Jupyter Notebook, NumPy, Pandas, Matplotlib, Scikit-Learn, Seaborn."}
    ];

    const resumeDetails=[
        <div className='resume-screen-container' key="education">
            <ResumeHeading heading={"Bachelor Of Technology"}
             subHeading={"Indian Institute of Information Technology Una"}
             fromDate={"2020"}
             toDate={"2024"}></ResumeHeading>
            <ResumeHeading heading={"Senior Secondary Education"}
             subHeading={"Sun International School Jhansi"}
             fromDate={"2018"}
             toDate={"2019"}></ResumeHeading>
            <ResumeHeading heading={"High Education"}
             subHeading={"Sun International School Jhansi"}
             fromDate={"2016"}
             toDate={"2017"}></ResumeHeading>
        </div>,
        // <div className='resume-screen-container' key="work-experience">
        //     <ResumeHeading heading={"Indian Institute of Information Technology Una"}
        //      subHeading={"BACHELOR OF TECHNOLOGY"}
        //      fromDate={"2020"}
        //      toDate={"2024"}></ResumeHeading>
        //      <div className='experience-description'>
        //          <span className='resume-description-text'>
        //              Currently working as ml technicalsupprt analyst at updemiw ed
        //          </span>
        //      </div>
        //      <div className='experience-description'>
        //          <span className='resume-description-text'>
        //              -heloo heloo heloo heloo heloo helooheloo heloo heloo helooheloo heloo 
        //          </span> <br></br>
        //          <span className='resume-description-text'>
        //              -heloo heloo heloo heloo heloo helooheloo heloo heloo helooheloo heloo 
        //          </span>  <br></br>
        //          <span className='resume-description-text'>
        //              -heloo heloo heloo heloo heloo helooheloo heloo heloo helooheloo heloo 
        //          </span>
        //          <br></br>
        //          <span className='resume-description-text'>
        //              -heloo heloo heloo heloo heloo helooheloo heloo heloo helooheloo heloo 
        //          </span>
        //      </div> 
        // </div>,
          <div className='resume-screen-container programming-skills-container' key="programming-skills">
          {programmingSkillDetails.map((skill,index)=>(
              <div className='skill-parent' key={index}>
                  <div className='heading-bullet'></div>
                  <div className='heading-skills'>
                      <span>{skill.skill}</span>
                      <div className='skill-percentage'>
                          <div style={{width:skill.ratingPercentage +"%"}} className='active-percentage'>
                              
                          </div>
                      </div>
                      </div>
              </div>
          ))}
      </div>,
          <div className='resume-screen-container' key="projects">
          {projectDetails.map((projectDetails,index)=>(
              <ResumeHeading
              key={index}
              heading={projectDetails.title}
              subHeading={projectDetails.subHeading}
             description={projectDetails.description}
             fromDate={projectDetails.duration.fromDate}
             toDate={projectDetails.duration.toDate}
              ></ResumeHeading>
          ))}
      </div>,
        <div className='resume-screen-container' key="interests">
        <ResumeHeading
        heading="Competitive Programming"
         description="Solved more than 1000 questions on various platforms."
        />
        <ResumeHeading
        heading="Sports"
         description="Love to play cricket, basketball and volleyball."
        />
        <ResumeHeading
        heading="Reading"
         description="Read sci-fi and biographical novels, comics genre etc."
        >
        </ResumeHeading>
    </div>
   
    ];
    
    const handleCarousal =(index)=>
    {
        let offsetHeight=360;
        let newCarousalOffset={
            style:{transform:"translateY("+index*offsetHeight*(-1)+"px)"},
        };
        setCarousalOffSetStyle(newCarousalOffset);
        setSelectByLeftIndex(index);
    };
    const getBullets=()=>
    {
        return resumeBullet.map((bullet,index)=>(
            <div onClick={()=>handleCarousal(index)} className={index===selectByLeftIndex?"bullet selected-bullet":"bullet"} key={index}>
                <img className='bullet-logo' src={require(`../../assets/Resume/${bullet.logoSrc}`)} alt='no inetrnet'>

                </img>
                <span className='bullets-label'>{bullet.label}</span>
            </div>
        ))
    }
    const getResumeScreen=()=>
    {
        return(
            <div style={carousalOffSetStyle.style} className='resume-details-carousal'>
                {resumeDetails.map((ResumeDetail)=>ResumeDetail)}
            </div>
        )
    }
  return <div className='resume-container screen-container' id={props.id ||""}>
     <div className='resume-content'>
         <ScreenHeading title={'Resume'} subHeading={'My Formal Introduction'}></ScreenHeading>
         <div className='resume-card'>
             <div className='resume-bullets'>
                 <div className='bullet-container'>
                     <div className='bullet-icons'>

                     </div>
                     <div className='bullets'>{getBullets()}</div>
                 </div>

             </div>
             <div className='resume-bullet-details'>{getResumeScreen()}</div>
         </div>
     </div>
  </div>;
  
}

