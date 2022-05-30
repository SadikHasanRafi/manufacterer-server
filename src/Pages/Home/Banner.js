import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Banner = () => {
  const [products, setProducts] = useState([])

  useEffect(()=>{ 
    axios.get("https://glacial-tundra-61856.herokuapp.com/showproducts")
    .then(res => {
        setProducts(res.data)
    })
    // products = products.data
},[])


  const product = products[products.length-1].pic
  const {pic,name,description} = product


    return (
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={pic} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="py-6">{description}</p>
          <Link to='/product'><button className="btn btn-primary">Buy Now</button></Link>
        </div>
      </div>
    </div>
    );
};

export default Banner;