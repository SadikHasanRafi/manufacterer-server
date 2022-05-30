import React from "react";
import { Link } from "react-router-dom";

const AboutCompany = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://5.imimg.com/data5/ANDROID/Default/2021/5/XK/IX/VG/49806835/product-jpeg-500x500.png"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">About us!</h1>
            <p className="py-6">
              We are selling laptop all type of laptop accessories and many more things. You can purchase them from our website. Here you will get cash on delivery option.
            </p>
            <Link to='*'><button className="btn btn-primary">More About us</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
