import React from "react";
import "./PortfolioList.css";
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import products from "../../consts/products";

const PortfolioList = () => {

  return (
    <div>
      <h1 className="list__h1">
        Featured works
      </h1>
      {products.map(item => (
          <PortfolioItem 
            img={item.img} 
            title={item.title}
            year={item.year}
            type={item.type}
            description={item.description}
          /> 
      ))}
    </div>      
  );
}

export default PortfolioList;