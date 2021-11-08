import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
          <div className="headerText">
            
            <h1 className="headerTitle">
              Hi, I am John,<br/>Creative Technologist
            </h1>
            
            <p className="textHeader">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <a
              rel="noreferrer"
              className="downloadResume"
              href="http://www.africau.edu/images/default/sample.pdf"
              target="_blank"
            >
              Download Resume
            </a>


          </div>
          <div>
            <img className="ava" src="ImgFooter/ava1.png" alt="" />
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