import React, { useEffect, useState } from 'react';
import Product from "../../Shared/Product/Product";
import axios from 'axios';
import useProducts from '../../Hooks/useProduct'


const ProuctRow = () => {
  
    const [products, setProducts] = useProducts([])

    

  return (
    <div className=" pb-24 ">

<div className=" mb-10 p-8 pb-24">
            <p className="text-center p-3 text-5xl uppercase">Grow You business with us</p>
            <p className="text-center text-2xl ">Getting accessories is now easier than ever before</p>
        </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center w-full">


      {
                products.map(x => <Product 
                    product = {x} 
                    key = {x._id}
                    ></Product> )
      }
            

      </div>
    </div>
  );
};

export default ProuctRow;
