import React from "react";
import { useForm } from "react-hook-form";

const BuyNowModal = () => {


    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);


  return (
    <div>
      <div class="card card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://api.lorem.space/image/movie?w=200&h=280"
            alt="Movie"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Title</h2>
          <div className=" flex flex-col">
            <p>
              Amount: <span>54</span>
            </p>
            <p>
              Total price: <span>99</span>
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Enter your address</span>
    
  </label>
  <input  defaultValue=''  {...register("address", { required: true })} type="text" placeholder="Address" class="input input-bordered w-full max-w-xs" />
  {errors.address?.type === 'required' && "Address is required"}

</div>
          

  <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Enter your phone number</span>
    
  </label>
  <input type="digit" defaultValue='' {...register("phoneNumber", { pattern: /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/ })} placeholder="Phone number" class="input input-bordered w-full max-w-xs" />
  {errors.phoneNumber?.type === 'required' && "Invalid phone number"}

  

</div>

<input type="submit"  value='Cash on delivery' className="mt-6 btn btn-bg-primary"  />

</form>

          </div>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>

      {/* modal section */}

      <input type="checkbox" id="buy-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Congratulations random Interner user!
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <label htmlFor="buy-modal" class="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNowModal;
