import React from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";


const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = async (data) => {

        await axios.post(" https://glacial-tundra-61856.herokuapp.com/addproducts", data).then((res) => {
            console.log(res?.data.success);
            if (res?.data.success === true) {
              toast.success("Product successfully added.");
            }
          });

        
    }

    return (
        <div className='flex justify-center items-center h-screen'>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[40vh]">

      <input placeholder="Name" className="input input-bordered input-secondary w-full max-w-xs m-2" {...register("name", { required: true })} />
      {errors.name?.type === 'required' && "Title required"}
      
      <input placeholder="Amount" className="input input-bordered input-secondary w-full max-w-xs m-2" type='number' {...register("amount", { required: true, min:1 })} />
      {errors.amount && "Amount required"}

      <input placeholder="Image link" className="input input-bordered input-secondary w-full max-w-xs m-2" {...register("pic", { required: true })} />
      {errors.pic && "Image link"}

      <input type='number'placeholder="Price per unit" className="input input-bordered input-secondary w-full max-w-xs m-2" {...register("price", { required: true,min:1 })} />
      {errors.price && "Price required"}

      <input placeholder="Description" className="input input-bordered input-secondary w-full max-w-xs m-2" {...register("description", { required: true })} />
      {errors.description && "Description required"}
      
      <input className="btn btn-outline btn-primary w-full  max-w-xs m-2" type="submit" />
      <Toaster />
    </form>
        </div>
    );
};

export default AddProduct;
