import React from "react";
import gif from "./omori-stressed.gif"

const FourZeroFour = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
            <img srcSet={gif}></img>
          <h1 className="text-5xl font-bold">404 Page not found</h1>
        </div>
      </div>
    </div>
  );
};

export default FourZeroFour;
