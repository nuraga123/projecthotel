import React from "react";
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="footer__socials">
                <li className="footer__socialItem">
                    <img className="fb" src="ImgFooter/fb.png" alt=""/>
                </li>
                <li className="footer__socialItem">
                    <div className="inst">
                        <div className="inst__point"></div>
                        <div className="inst__circle"></div>
                    </div>
                </li>
                <li className="footer__socialItem">
                    <img className="tv" src="ImgFooter/tvit.png" alt=""/>
                </li>
                <li className="footer__socialItem">
                    <img className="in" src="ImgFooter/Link.png" alt=""/>
                </li>
            </ul>
            <p className="footer__text">
                Copyright ©2020 All rights reserved by Nuraga Yusifli
            </p>
            
        </footer>
    );
};

export default Footer;