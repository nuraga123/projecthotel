import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
          <div className="header__content">
            
            <h1 className="header__title">
              Hi, I am Nuraga,<br/>Frontend Developer
            </h1>
            
            <p className="header__text">
              Specialist who knows how to layout web pages, has a good knowledge of the JavaScript programming language, knows one or several JavaScript frameworks (React, Angular, Vue.js)
            </p>

            <a 
              className="header__resume"
              rel="noreferrer"
              href="http://www.africau.edu/images/default/sample.pdf"
              target="_blank"
            >
              Download Resume
            </a>
          </div>
          <div className="ava">
            <img  src="Img/ava1.png" alt="nuraga"/>
          </div>
        </header>
    )
}

export default Header;