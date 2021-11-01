import React from "react";
import "./Footer.css"

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="footer__img">
                    <img className="fb" src="ImgFooter/fb.png"/>
                    <div className="inst">
                        <div className="inst__point"></div>
                        <div className="inst__circle"></div>
                    </div>
                    <img className="tv" src="ImgFooter/tvit.png"/>
                    <img className="in"src="ImgFooter/Link.png"/>
                </div>
                <p className="footer__text">
                    Copyright ©2020 All rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;