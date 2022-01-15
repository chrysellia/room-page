import React from 'react'
import './About.style.scss'

const About = () => {
    return (
        <div className="about-page">
            <div className="about-wrapper">
                <div className="about-image">
                    <img src="images/image-about-dark"/>
                </div>
                <div className="about-content">
                    <div className="about-title">ABOUT OUR FURNITURE</div>
                    <div className="about-description">
                        <p>
                            Our multifunctional collection blends desifn and function to suit your individual<br/>
                            taste. Make each room unique, or pick a cohesive theme that best express your <br/>
                            interests and what inspores you.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
