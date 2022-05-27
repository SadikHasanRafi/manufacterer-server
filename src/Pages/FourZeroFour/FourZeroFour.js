import React from "react";
import gif from "./omori-stressed.gif"

const FourZeroFour = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
            <img srcSet={gif}></img>
          <h1 class="text-5xl font-bold">404 Page not found</h1>
        </div>
      </div>
    </div>
  );
};

export default FourZeroFour;
