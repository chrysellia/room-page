import React from 'react'
import './Header.style.scss'
import Home from '../Home/Home.component'

const Header = () => {
    return (
        <div className="header-page">
            <div className="header-wrapper" style={{backgroundImage:'url(images/desktop-image-hero-1.jpg)'}}>
                <div className="header-navbar">
                    <div className="navbar-logo">room</div>
                    <div className="navbar-menu">home</div>
                    <div className="navbar-menu">shop</div>
                    <div className="navbar-menu">about</div>
                    <div className="navbar-menu">contact</div>
                </div>
            </div>
            <div className="home-bloc"><Home/></div>
        </div>
    )
}

export default Header
