import React from "react";
import { NavLink, useParams } from "react-router-dom";

const HomePage = () => {
  let { id } = useParams();
  return (
    <div>
      <h1>Welcome</h1>
      <p>This is my site. Take a look around!</p>
    </div>
  );
};

export default HomePage;
