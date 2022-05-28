import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useProducts = () => {
    
    const [products, setProducts] = useState([])

    // Fetching data
    useEffect(()=>{
    
        axios.get("http://localhost:8000/showproducts")
        .then(res => {
            setProducts(res.data)
            console.log(res.data)
        })
       
        // products = products.data
   },[])
    
    //Data export
    return [products, setProducts];

};

export default useProducts;