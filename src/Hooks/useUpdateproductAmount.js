import React, { useState } from 'react';



const useUpdateproductAmount = () => {

    let newData = 0
    let oldData = 0
    let updatedData = 0

    //accepted value is only + or -
    const [sign,setSign] = useState('') 


     // means right now how many item I have
    const [currentData,setCurrentData] = useState({})


    //means how many item I increase or decrease
    const [updateAmount,setUpdateAmount] = useState(0)


    //after the calculation latest data will be store here
    const [latestData,setLatestData] = useState(null) 


    

    if (sign == '+'){
        newData = parseInt(updateAmount.updateAmount)
        oldData = parseInt(currentData.amount)
        updatedData = oldData + newData
        currentData.amount = updatedData
        setLatestData(currentData.amount)
        console.log(currentData.amount)
       
    }
    else if (sign == '-'){
        newData = parseInt(updateAmount.updateAmount)
        oldData = parseInt(currentData.amount)
        updatedData = oldData - newData
        currentData.amount = updatedData
        setLatestData(currentData.amount)
        console.log(currentData.amount)
    }

    return {setSign,setCurrentData,setUpdateAmount,latestData}
};

export default useUpdateproductAmount;