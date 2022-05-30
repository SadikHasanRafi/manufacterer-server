import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Banner = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{ 
    axios.get("http://localhost:8000/showproducts")
    .then(res => {
        setProducts(res.data)
    })
    // products = products.data
},[])


  console.log(products[products.length-1].pic)


    return (
      <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row">
        <img src={products[products.length-1]?.pic} class="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 class="text-5xl font-bold">{products[products.length-1]?.name}</h1>
          <p class="py-6">{products[products.length-1]?.description}</p>
          <Link to='/product'><button class="btn btn-primary">Buy Now</button></Link>
        </div>
      </div>
    </div>
    );
};

export default Banner;