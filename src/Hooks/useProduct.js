import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useProducts = () => {
    
    const [products, setProducts] = useState([])

    // Fetching data
    useEffect(()=>{
    
        axios.get("https://glacial-tundra-61856.herokuapp.com/showproducts")
        .then(res => {
            setProducts(res.data)
        })
       
        // products = products.data
   },[])
    
    //Data export
    return [products, setProducts];

};

export default useProducts;