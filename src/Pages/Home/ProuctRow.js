import React from "react";
import Product from "../../Shared/Product/Product";

const ProuctRow = () => {
  return (
    <div className=" pb-24 ">

<div className=" mb-10 p-8 pb-24">
            <p className="text-center p-3 text-5xl uppercase">Grow You business with us</p>
            <p className="text-center text-2xl ">Getting accessories is now easier than ever before</p>
        </div>


      <div className="flex flex-cols justify-center justify-evenly">


       <Product></Product>
       <Product></Product>
       <Product></Product>


      </div>
    </div>
  );
};

export default ProuctRow;
