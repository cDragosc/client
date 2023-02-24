import React from 'react'
// import Typical from 'react-typical'
import './Profile.css';
 import ScrollService from '../../../utilities/ScrollService';

export default function Profile() {
    return(
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                        <a href='https://www.facebook.com/dragosh.ucv'>
                        <i className='fa fa-facebook-square'></i>
                        </a>
                        <a href='#'>
                        <i className='fa fa-google-plus-square'></i>
                        </a>   
                        <a href='https://instagram.com/dragos.constantin19?igshid=YmMyMTA2M2Y='>
                        <i className='fa fa-instagram'></i>
                        </a>   
                        <a href='#'>
                        <i className='fa fa-youtube-square'></i>
                        </a>   
                        <a href='#'>
                        <i className='fa fa-twitter'></i>
                        </a>

                        </div>
      
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'M <span className='highlighted-text'>Dragos</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>

                        <div className="profile-options">
                            <button className='btn primary-btn'
                             onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                            >Hire Me</button>
                                <a href='dragoscv.pdf' download='Dragos dragoscv.pdf'>
                                    <button className='btn highlighted-btn'>Get Resume</button>
                                </a>
                        </div>
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