import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import toast, { Toaster } from "react-hot-toast";

const BuyNowModal = (props) => {
  const { singleProduct, orderAmount } = props;
  const { amount, description, name, pic, price, _id } = singleProduct;
  const { amount: orderAmout } = orderAmount;

  const [user] = useAuthState(auth);
  const { register, errors, handleSubmit } = useForm();

  const [orderDetails, setOrderDetails] = useState(true);

  const onSubmit = async (data) => {
    const orderData = {
      
      uid:user.uid,
      productId:_id,
      price:price,
      quantity:orderAmount,
      status:'pending',
      address:data.address,
      number:data.number,
      email:user.email,
      name:user.displayName,
      productName:name
    }
    await axios.post(' http://localhost:8000/addorder',orderData)
    .then(res => {
      if (res?.data.success === true) {
        toast.success("Soon your order will be delivered.");
      }
      setOrderDetails(false)
      
    })
    console.log(orderData)

    
   
  };

  return (
    <div className=" mb-2 z-50  absolute">
      {/* modal section */}

      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="my-modal-6"
            class="btn btn-sm btn-circle absolute right-2 top-2 bg-red-200 hover:border-0 hover:bg-red-500"
          >
            ✕
          </label>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
            <h1 className="text-xl mb-10">Purchase</h1>
            <div className="flex flex-col">
              <label>Name</label>
              <input
                placeholder="Name"
                disabled
                value={user.displayName}
                class=" w-[70vw] input input-bordered input-secondary w-full max-w-xs"
                type="text"
                {...register("name")}
              />

              <div className="flex flex-col">
                <label>Email</label>
                <input
                  placeholder="Email"
                  disabled
                  value={user.email}
                  class="w-[70vw] input input-bordered input-secondary w-full max-w-xs"
                  type="text"
                  {...register("email")}
                />
              </div>

              <label>Address</label>
              <input
                placeholder="Address"
                class="w-[70vw] input input-bordered input-secondary w-full max-w-xs"
                {...register("address", { required: true})}
              />
            </div>

            <div className="flex flex-col">
              <label>Mobile number</label>
              <input
                placeholder="Phone number"
                class="w-[70vw] input input-bordered input-secondary w-full max-w-xs"
                type="number"
                {...register("number", {
                  required: true,
                  maxLength: 11,
                  pattern: /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/
                })}
              />
            </div>
            <div className="flex items-center gap-8">   

            <div class="modal-action ">
              { orderDetails ? <input  className="btn hover:bg-green-200 hover:border-0" type="submit" value="Proced to cash on delivery" /> : <></>}
            </div>

            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default BuyNowModal;
