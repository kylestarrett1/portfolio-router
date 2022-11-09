import React from "react";
import { NavLink } from "react-router-dom";

const PortfolioPage = () => {
  return (
    <div>
      <h1>My Work</h1>
      <p>Check out the stuff I've done:</p>
      <NavLink to='/portfolio/1'>Item One</NavLink>
      <NavLink to='/portfolio/2'>Item Two</NavLink>
    </div>
  );
};

export default PortfolioPage;
