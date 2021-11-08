import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
          <div className="header__content">
            
            <h1 className="header__title">
              Hi, I am John,<br/>Creative Technologist
            </h1>
            
            <p className="header__text">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
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
          <div>
            <img className="header__ava" src="ImgFooter/ava1.png" alt="" />
          </div>
          {/* <div className="wrapper">
            <input 
              type="checkbox"
            />
          </div> */}
        </header>
    )
}

export default Header;