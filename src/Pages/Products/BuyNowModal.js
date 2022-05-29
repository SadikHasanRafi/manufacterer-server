import React from "react";
import { useForm } from "react-hook-form";

const BuyNowModal = (props) => {
  const { singleProduct, orderAmount } = props;
  const { amount, description, name, pic, price, _id } = singleProduct;
  const { amount: orderAmout } = orderAmount;
  console.log(orderAmout, amount);

  const { register, errors, handleSubmit } = useForm();


  


  const onSubmit = (data) => {
    console.log("RESULT", data);
  };

  return (
    <div className=" mb-2 z-50  absolute">
      {/* modal section */}

      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">


          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
          <h1 className="text-xl mb-10">Purchase</h1>
            <div className="flex flex-col">
              <label>Name</label>
              <input
                placeholder="Name"
                class=" w-[70vw] input input-bordered input-secondary w-full max-w-xs"
                type="text"
                {...register("name", { required: true, maxLength: 80 })}
              />

              <label>Address</label>
              <input
                placeholder="Address"
                class="w-[70vw] input input-bordered input-secondary w-full max-w-xs"
                type="email"
                {...register("Last name", { required: true, maxLength: 100 })}
              />
            </div>

            <div className="flex flex-col">
              <label>Email</label>
              <input
                placeholder="Email"
                class="w-[70vw] input input-bordered input-secondary w-full max-w-xs"
                type="text"
                {...register("Email", {
                  required: true,
                  pattern:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
              />
            </div>

            <div className="flex flex-col">
              <label>Mobile number</label>
              <input
                placeholder="Phone number"
                class="w-[70vw] input input-bordered input-secondary w-full max-w-xs"
                type="text"
                {...register("Mobile number", {
                  required: true,
                  maxLength: 11,
                  pattern: /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/,
                })}
              />
            </div>




         <div className="flex items-center gap-8">   
           
           
         <div class="modal-action ">
             <input className="btn hover:bg-green-200 hover:border-0" type="submit" value="Proced to cash on delivery" />
          </div>
     
            
           <div class="modal-action">
            <label for="my-modal-6" class="btn hover:bg-red-200 hover:border-0">
              close
            </label>
          </div>



          </div>
          



          </form>

         
        </div>
      </div>
    </div>
  );
};

export default BuyNowModal;
