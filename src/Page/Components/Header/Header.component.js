import React from 'react'
import './Header.style.scss'

const Header = () => {
    return (
        <div className="header-page">
            <div className="desktop-design">
                <div className="header-wrapper" style={{backgroundImage:'url(images/desktop-image-hero-1.jpg)'}}>
                    <div className="header-navbar">
                        <div className="navbar-logo">room</div>
                        <div className="navbar-menu">home</div>
                        <div className="navbar-menu">shop</div>
                        <div className="navbar-menu">about</div>
                        <div className="navbar-menu">contact</div>
                    </div>
                </div>

                <div className="home-page">
                    <div className="home-wrapper">
                        <div className="home-content">
                            <div className="home-title">Discover innovative <br/> ways to decorate</div>
                            <div className="home-description">
                                <p>
                                    We provide unmateched quality and style for property <br/>
                                    owners accross the country. Our experts comine form and <br/>
                                    function in bringing your vision to life. Create a room in yoir own <br/>
                                    style with our collection and male your property a reflection of <br/>
                                    you and what you love.
                                </p>
                            </div>
                            <div className="home-button">
                                <div className="button-title">SHOP NOW</div>
                                <div className="button-arrow">
                                    <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero"/></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="button-slider">
                        <div className="button-wrapper">
                            <img className="slider-item" src="images/icon-angle-left.svg"/>
                        </div>
                        <div className="button-wrapper">
                            <img className="second-item" src="images/icon-angle-right.svg"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mobile-design">
                <div className="header-wrapper" style={{backgroundImage:'url(images/desktop-image-hero-1.jpg)'}}>
                    <div className="header-navbar">
                        <div className="navbar-hamburger">
                            <svg width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="#FFF" fill-rule="evenodd"/></svg>
                        </div>
                        <div className="navbar-logo">room</div>
                    </div>
                    <div className="button-slider">
                        <div className="button-wrapper">
                            <img className="slider-item" src="images/icon-angle-left.svg"/>
                        </div>
                        <div className="button-wrapper">
                            <img className="second-item" src="images/icon-angle-right.svg"/>
                        </div>
                    </div>
                </div>

                <div className="home-page">
                    <div className="home-wrapper">
                        <div className="home-content">
                            <div className="home-title">Discover innovative <br/> ways to decorate</div>
                            <div className="home-description">
                                <p>
                                    We provide unmateched quality and style for property <br/>
                                    owners accross the country. Our experts comine form and <br/>
                                    function in bringing your vision to life. Create a room in yoir own <br/>
                                    style with our collection and male your property a reflection of <br/>
                                    you and what you love.
                                </p>
                            </div>
                            <div className="home-button">
                                <div className="button-title">SHOP NOW</div>
                                <div className="button-arrow">
                                    <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero"/></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="home-wrapper">
                <div className="home-content">
                    <div className="home-title">We are available <br/> all across the globe</div>
                    <div className="home-description">
                        <p>
                            With stores all over the world, it's easy for you to find furniture for <br/>
                            your home or place of business. Locally, we're in most major <br/>
                            cities throughout the country. Find the branch nearest you using <br/>
                            our store locator. Any questions? Don't hesitate to contact us today.
                        </p>
                    </div>
                    <div className="home-button">
                        <div className="button-title">SHOP NOW</div>
                        <div className="button-arrow">
                            <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero"/></svg>
                        </div>
                    </div>
                    <div className="button-slider">
                        <div className="button-wrapper">
                            <img className="slider-item" src="images/icon-angle-left.svg"/>
                        </div>
                        <div className="button-wrapper">
                            <img className="second-item" src="images/icon-angle-right.svg"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-wrapper">
                <div className="home-content">
                    <div className="home-title">Manufactured with <br/> the best materials</div>
                    <div className="home-description">
                        <p>
                            Our modern furniture store provide a high level of quality. Our <br/>
                            company has invested in advanced technology to ensure that <br/>
                            every product is made as perfect and as consistent as possible. <br/>
                            With threee decades of experience in this industry, we understand <br/>
                            what customers want for their home and office.
                        </p>
                    </div>
                    <div className="home-button">
                        <div className="button-title">SHOP NOW</div>
                        <div className="button-arrow">
                            <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fill="#000" fill-rule="nonzero"/></svg>
                        </div>
                    </div>
                    <div className="button-slider">
                        <div className="button-wrapper">
                            <img className="slider-item" src="images/icon-angle-left.svg"/>
                        </div>
                        <div className="button-wrapper">
                            <img className="second-item" src="images/icon-angle-right.svg"/>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Header
