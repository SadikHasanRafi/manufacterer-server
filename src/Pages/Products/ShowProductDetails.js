import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import BuyNowModal from "./BuyNowModal";
import axios from 'axios'
import { data } from "autoprefixer";
const ShowProductDetails = () => {
  
  const id = useParams()

  const [singleProduct, setSingleProduct] = useState(null)

  const [orderAmount, setOrderAmount] = useState(null)




  useEffect(()=>{
    axios.get(`http://localhost:8000/showproductdetails/${id._id}`)
    .then(res => setSingleProduct(res.data))
  },[])


  const {  register,handleSubmit, watch ,formState: { errors }} = useForm();
  const onSubmit = (data) => {
    console.log(data,singleProduct);
    setOrderAmount(data,singleProduct)
  };
    const {amount,description,name,pic,price} = singleProduct || {}
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img
            srcSet={pic}
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold">{name}</h1>
            <p class="py-6">
              {description}
            </p>

            <p>In stock: <span>{amount}</span></p>
            <p>Price per unit: <span>{price}</span></p>

            <div>
            

           

            <form onSubmit={handleSubmit(onSubmit)}>
     
            <div>              
              <div className="flex mb-3">
              <input type="number" defaultValue='20'   class="input mr-3 input-bordered input-accent  w-32  max-w-xs" {...register("amount",  {  min:20 })} />
              <input  value='Select'  type="submit" class="btn btn-primary modal-button"></input>
              </div>
              {errors.amount && <p className=" text-red-500">Order minimum 20</p>}
              <label  for="my-modal-6"   class="btn btn-primary mr-3">Confirm your purchase</label> 
            </div>

              
              
              
           </form>
            
            {orderAmount && <BuyNowModal orderAmount={orderAmount} singleProduct={singleProduct} ></BuyNowModal>}
              
             
                
            </div>
          
          </div>
        </div>
      </div>


      
    </div>
  );
};

export default ShowProductDetails;
