import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate(-1); //you can pass routes or number values too to go backward -1,-2
    }, 1000);
  }, []);
  return <h1>Not Found</h1>;
};

export default NotFound;
