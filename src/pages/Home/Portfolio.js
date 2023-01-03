import React from "react";
import PortfolioItem from "../Shared/PortfolioItem";
const Portfolio = () => {
  return (
    <div className="lg:p-[20px] px-0">
      <div className="grid lg:grid-cols-3 grid-cols-1">
        <PortfolioItem></PortfolioItem>
        <PortfolioItem></PortfolioItem>
        <PortfolioItem></PortfolioItem>
        <PortfolioItem></PortfolioItem>
        <PortfolioItem></PortfolioItem>
        <PortfolioItem></PortfolioItem>
      </div>
    </div>
  );
};

export default Portfolio;
