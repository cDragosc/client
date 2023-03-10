import React,{useEffect} from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from '../../utilities/Animations'
import './AboutMe.css';

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen)=>{
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription = 
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

const SCREEN_CONSTANTS = {
    descriprion: "Junior Front-End developer with knowledge in  HTML, CSS,JavaScript, prepared to create, stylize and optimize websites for web and mobile. ",
    highlights:{
        bullets:[
            "Front End-Development",
            "Interactive front end as per the design",
            "Follow API",
            "React",
            "Bootstrap",
            "Node JS",
        ],
        heading:"Here are a few highlits:"
    }
}
const renderHighlight = ()=>{
    return(
        SCREEN_CONSTANTS.highlights.bullets.map((value,i)=>(
            <div className="highlight" key={i}>
              <div className="highlight-blob"></div>
              <span>{value}</span>

            </div>

        ))
    );
};

    return (
        <div className="about-me-container screen-container" id={props.id || ""}>
            <div className="about-me-parent">
                <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"}/>
              <div className="about-me-card">
                <div className="about-me-profile"></div>
                    <div className="about-me-details">
                    <span className="about-me-description">
                        {SCREEN_CONSTANTS.descriprion}
                        </span>
                    <div className="about-me-highlights">
                        <div className="highlight-heading">
                            <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                    </div>
                    {renderHighlight()}
                    </div>
                    <div className="about-me-options">
                    <button className="btn primary-btn"
                    onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                    >Hire Me
                        </button>
                    <a href="ehizcv.pdf" download="">
                        <button className="btn highlighted-btn">Get Resume</button>
                    </a>
                    </div> 
                </div>  
            </div>
            </div>

        </div>
    );
}