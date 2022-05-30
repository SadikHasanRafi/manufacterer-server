import React, { useState } from 'react';

const useUpdateproductAmount = () => {
    //accepted value is only + or -
    const [sign,setSign] = useState('') 


     // means right now how many item I have
    const [currentData,setCurrentData] = useState({})


    //means how many item I increase or decrease
    const [updateAmount,setUpdateAmount] = useState(0)


    //after the calculation latest data will be store here
    const [latestData,setLatestData] = useState({}) 


    

    if (sign == '+'){
        console.log(sign,currentData,updateAmount)
    }
    else if (sign == '-'){
        console.log(sign,currentData,updateAmount)  
    }

    return {setSign,setCurrentData,setUpdateAmount,latestData}
};

export default useUpdateproductAmount;