import React from 'react'
import './extraCSS/Landing.css'



const Landing = () => {
    return (
        <div class="landing-body">
            <div id="slide-container">
                <div id="welcome">Welcome...</div>
                <div id="name">I'm Patrick!</div>
            </div>
            <div id="sun">
                <a href="https://github.com/creavenp">
                    <div id="earth"></div>
                </a>
            </div>
            <div id="sun2">
                <a href="https://www.linkedin.com/in/patrick-r-creaven-3a5793189">
                    <div id="mars"></div>
                </a>
            </div>
            <div id="pic"></div>
        </div>
    )
}

export default Landing
