import React from 'react'
import './Home.style.scss'

const Home = () => {
    return (
        <div className="home-component">
            <div className="home-wrapper">
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
                <div className="button-slider">
                    <img className="slider-item" src="images/icon-angle-left.svg"/>
                    <img src="images/icon-angle-right.svg"/>
                </div>
            </div>
        </div>
    )
}

export default Home
