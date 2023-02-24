import React, {useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import './Resume.css';

const Resume = (props) => {
    /*STATES */
    const[selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const[carousalOffsetStyle, setCarousalOffSettStyle] = useState({});

         let fadeInScreenHandler = (screen)=>{
        if (screen.fadeInScreen !== props.id) return;

        Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription = 
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    /*REUSABLE MINOR COMPONENTS*/
    const ResumeHeading= (props)=>{
        return(
        <div className=" resume-heading">
            <div className="resume-main-heading">
                <div className="heading-bullet"></div>
                    <span>{props.heading ? props.heading : ''}</span>
                    {props.fromDate && props.toDate ? (
                        <div className="heading-date">
                            {props.fromDate + "-" + props.toDate}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
                <div className="resume-sub-heading">
                    <span>{props.subHeading ? props.subHeading : ""}</span>
                </div>
              <div className="resume-heading-description">
                <span>{props.description ? props.description : ""}</span>
                </div>  
            </div>
       
            
        );

    };
/*STATIC RESUME DATA FOR THE LABELS */
    const resumeBullets =[
        {label:"Education", logoSrc:'education.svg'},
        {label:"Work History", logoSrc:"work-history.svg"},
        {label:"Programming Skils", logoSrc:"programming-skills.svg"},
        {label:"Projects", logoSrc:"projects.svg"},
        {label:"Interests", logoSrc:"interests.svg"},
    ];
//  <div className="classPercentage"
    const programmingSkillDetails = [
        {skill: "JavaScript", ratingPercentage: 85 },
        {skill: "React JS", ratingPercentage: 85 },
        {skill: "React Native", ratingPercentage: 85 },
        {skill: "Express JS", ratingPercentage: 89 },
        {skill: "Node JS", ratingPercentage: 89 },
        {skill: "Mongo Db", ratingPercentage: 70 },
        {skill: "Core Java", ratingPercentage: 80 },
        {skill: "HTML", ratingPercentage: 80 },
        {skill: "CSS", ratingPercentage: 80 },
    ];
    //    ></div>

    const projectDetails =[
        {
            title:"Personal Portofolio Website", 
            duration:{fromDate: "2022", toDate:"2023"},
            description:"A Personal Portofolio Website to showcase all my details and projects at on place",
            subHeading:"Technologies Used: React JS,BootStrap,CSS,Node Js",
        },
              {
            title: "Weather Website",
            duration:{fromDate: "2022", toDate:"2023"},
            description:"A weather demo aplication where you can see the weather in diferent cities",
            subHeading:"Technologies Used: HTML,CSS,JavaScript,weather API",
        },
              {
            title: "Product List",
            duration:{fromDate: "2022", toDate:"2023"},
            description:"A demo aplication who contains a product list, a search bar and a sort button (in stock, out of stock)",
            subHeading:"Technologies Used: React JS,CSS",
        },

    ];

    const resumeDetails = [
        <div className="resume-screen-container" key="education">
            <ResumeHeading
            heading={"Informal IT School"}
            subHeading={"Front-End Development"}
            fromDate={"2022"}
            toDate={"2023"}
            />
              <ResumeHeading
            heading={"Faculty of Automation, Computer Science and Electronics"}
            subHeading={"Automation and Applied Informatics"}
            fromDate={"2014"}
            toDate={"2018"}
            />
              <ResumeHeading
            heading={"National College Elena Cuza"}
            subHeading={"Mathematics-Computer science"}
            fromDate={"2010"}
            toDate={"2014"}
            />
            </div>,

            /*WORT EXPERIENCE*/
            <div className="resume-screen-container" key="work-experience">
                <div className="experience-container">
                <ResumeHeading
            heading={"Informal It School"}
            subHeading={"Front-End Developer"}
            fromDate={"2022"}
            toDate={"Present"}
            /><br/>
                            <ResumeHeading
            heading={"VODAFONE"}
            subHeading={"Retention Consumer"}
            fromDate={"2016"}
            toDate={"Present"}
            />
            <div className="experience-description">
                <span className="resume-description-text">
                    -Helped to increase consumer retention by striving to create wonderfull costumer experiences.
                </span>
            
            </div>
            
            <div className="experience-description">
                <span className="resume-description-text">
                   -Identified and maximized sales opportunies and increased customer retention rates
                </span>
                </div>
                <br/>
                 <span className="resume-description-text">
                   -Provided excellent costumer service and achieved a high rate of client satisfaction and retention .{" "}
                </span>
                </div>
                
                <span className="resume-description-text">
                    -I stretch mu mental capacity to develope
                    </span>
                    
                </div>,
                
                
                
                

               /* PROGRAMMING SKILS*/
                <div className="resume-screen-container programming-skills-container"
                key="programming-skills"
                >
                    {programmingSkillDetails.map((skill, index)=>(
                        <div className="skill-parent" key={index}>
                            <div className="heading-bullet"></div>
                            <span>{skill.skill}</span>
                            <div className="skill-percentage">
                                <div style={{width: skill.ratingPercentage + "%"}}
                                className='active-percentage-bar'>


                                </div>
                            </div>
                            </div>
                    ))}
                </div>,

                /*PROJECTS*/
                <div className="resume-screen-container" key="projects">
                    {projectDetails.map((projectsDetails, index)=>(
                        <ResumeHeading
                        key={index}
                        heading={projectsDetails.title}
                        subHeading={projectsDetails.subHeading}
                        description={projectsDetails.description}
                        fromDate={projectsDetails.duration.fromDate}
                        toDate={projectsDetails.duration.toDate}
                        />

                    ))}
                </div>,

                /*INTERESTS*/
                   <div className="resume-screen-container" key="interests">
                    <ResumeHeading
                    heading='Teaching'
                    description='Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing.'
                    />
                         <ResumeHeading
                    heading='Music'
                    description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
                    />
                         <ResumeHeading
                    heading='Gaming'
                    description='I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most.'
                    />
            </div>,
    ];

const handleCarousal =(index)=>{
    let offsetHeight = 360;
    let newCarousalOffset ={
        style:{transform:"translateY(" + index * offsetHeight * -1 + "px)"},
    };
    setCarousalOffSettStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
};

const getBullets = () => {
    return resumeBullets.map((bullet, index)=>(
<div
onClick={() => handleCarousal(index)}
className={ index === selectedBulletIndex ? "bullet selected-bullet"  : "bullet" }
key={index}
>
    <img 
    className="bullet-logo"
    src={require (`../../assets/Resume/${bullet.logoSrc}`)}
    alt="B"
    />
    <span className="bullet-label">{bullet.label}</span>
</div>
    ));
    };

    const getResumeScreens = () => {
        return(
            <div
            style={carousalOffsetStyle.style}
            className="resume-details-carousal"
            >
                {resumeDetails.map((ResumeDetail) => ResumeDetail)}
            </div>
        );
    };

    useEffect(() => {
        return() =>{
            /*UNSUBSCRIBE THE SUBSCRIPTION*/
            fadeInSubscription.unsubscribe();
        };
    }, [fadeInSubscription]);

    return(
        <div className=" resume-container screen-container " id={props.id || ""}>
            <div className="resume-content">
                <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"}/>
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                            <div className="bullets">{getBullets()}</div>
                        </div>
                    </div>

                    <div className="resume-bullet-details">{getResumeScreens()}</div>
                </div>
            </div>

        </div>
    );
};

export default Resume;