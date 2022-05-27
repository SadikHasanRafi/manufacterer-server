import React from 'react';
import { useForm } from "react-hook-form";


const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='flex justify-center'>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[40vh]">

      <input placeholder="Name" class="input input-bordered input-secondary w-full max-w-xs m-2" {...register("name", { required: true })} />
      {errors.name?.type === 'required' && "Title required"}
      
      <input placeholder="Amount" class="input input-bordered input-secondary w-full max-w-xs m-2" type='number' {...register("amount", { required: true, min:1 })} />
      {errors.amount && "Amount required"}

      <input placeholder="Image link" class="input input-bordered input-secondary w-full max-w-xs m-2" {...register("pic", { required: true })} />
      {errors.pic && "Image link"}

      <input type='number'placeholder="Price per unit" class="input input-bordered input-secondary w-full max-w-xs m-2" {...register("price", { required: true,min:1 })} />
      {errors.price && "Price required"}

      <input placeholder="Description" class="input input-bordered input-secondary w-full max-w-xs m-2" {...register("description", { required: true })} />
      {errors.description && "Description required"}
      
      <input class="btn btn-outline btn-primary w-full  max-w-xs m-2" type="submit" />
    </form>
        </div>
    );
};

export default AddProduct;
