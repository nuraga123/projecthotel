import React from "react";
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="footer__socials">
                <li className="footer__socialItem">
                    <a
                        rel="noreferrer"
                        href="https://www.facebook.com/"
                        target="_blank"
                    >
                        <img className="fb" src="ImgFooter/fb.png" alt="fb"/>
                    </a>
                </li>
                <li className="footer__socialItem">
                    <a
                        rel="noreferrer"
                        href="https://twitter.com/"
                        target="_blank"
                    >
                        <img 
                            className="tv" 
                            src="ImgFooter/tvit.png" 
                            alt="tv"
                        />
                    </a>
                </li>
                <li className="footer__socialItem">
                    <a
                        rel="noreferrer"
                        href="https://learn.javascript.ru/"
                        target="_blank"
                    >
                        <img 
                            className="in"
                            src="ImgFooter/Link.png"
                            alt="in"
                        />
                    </a>
                </li>
                <li>
                    <a
                        rel="noreferrer"
                        href="https://www.instagram.com/?hl=ru"
                        target="_blank"
                    >
                        <img 
                            className="inst"  
                            src="ImgFooter/ins.jpg" 
                            alt="inst"/>
                    </a>
                </li>
            </ul>
            <p className="footer__text">
                Copyright ©2020 All rights reserved by Nuraga Yusifli
            </p>
        </footer>
    );
};

export default Footer;