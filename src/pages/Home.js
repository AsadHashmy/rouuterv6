import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  return <h1>Home {location.state}</h1>;
};

export default Home;
