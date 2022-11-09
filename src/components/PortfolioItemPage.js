import React from "react";
import { NavLink, useParams } from "react-router-dom";

const PortfolioItem = () => {
  let { id } = useParams();
  return (
    <div>
      <h1>A Thing I've Done</h1>
      <p>This page is for the item with the id of {id}</p>
    </div>
  );
};

export default PortfolioItem;
