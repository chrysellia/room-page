import React from 'react'
import './About.style.scss'

const About = () => {
    return (
        <div className="about-page">
            <div className="about-wrapper">
                <div className="about-image">
                    <img src="images/image-about-dark.jpg"/>
                </div>
                <div className="about-content">
                    <div className="content-wrapper">
                        <div className="about-title">ABOUT OUR FURNITURE</div>
                        <div className="about-description">
                            <p>
                                Our multifunctional collection blends desifn and function to suit your individual
                                taste. Make each room unique, or pick a cohesive theme that best express your 
                                interests and what inspires you. FInd the furniture pieces you need, from 
                                traditional to contemporary styles or anything in between. Product specialists 
                                are available to help you create your dream space.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="about-image">
                    <img src="images/image-about-light.jpg"/>
                </div>
            </div>
        </div>
    )
}

export default About
