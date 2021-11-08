import React from "react";
import "./PortfolioItem.css"

const PortfolioItem = ({img, title, year, type, description}) => {
  return (
    <div className="portfolioItem">      
      <div className="portfolioItem__sbor">

        <img 
          className="portfolioItem__img"
          src={img}
          alt=""
        />  
      
        <div className="text__fayl">
          <h1 
            className="portfolioItem__title">
            {title}
          </h1>  
      
          <div className="portfolioItem__caption">
            <span 
              className='portfolioItem__year'>
              {year}
            </span>
          
            <span 
              className='portfolioItem__type'>
              {type}
            </span>
          </div>
      
          <p 
            className="portfolioItem__description">
            {description}
          </p>
          
        </div>
      </div>
      
      <div className="portfItem__">

      </div>
    </div>
  );
};

export default PortfolioItem;