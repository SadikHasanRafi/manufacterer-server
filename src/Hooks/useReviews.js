import React, { useEffect, useState } from 'react';
import axios from 'axios';
const useReviews = () => {
    const [reviews, setReviews]= useState([])

    // Fetching data
    useEffect(()=>{
    
        axios.get("https://glacial-tundra-61856.herokuapp.com/showreviews")
        .then(res => {
            setReviews(res.data)
            
            
        })
       
        // products = products.data
   },[])
   
    //Data export
    return [reviews, setReviews];
};

export default useReviews;