import React from "react";
import { useForm } from "react-hook-form";

const AddReview = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex flex-1 justify-center items-center">
      <form  onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <textarea rows='10' cols='30' defaultValue="" {...register("review")} class="textarea textarea-secondary" placeholder="Review"></textarea>
        
        <div class="rating gap-10 m-5">
          <input type="radio" name="rating" class="mask mask-star bg-yellow-400" />
          <input type="radio" name="rating" class="mask mask-star bg-yellow-400"  checked/>
          <input type="radio" name="rating" class="mask mask-star bg-yellow-400" />
          <input type="radio" name="rating" class="mask mask-star bg-yellow-400" />
          <input type="radio" name="rating" class="mask mask-star bg-yellow-400" />
        </div>

        <input class="btn btn-outline btn-success my-2" type="submit" />
      </form>
    </div>
  );
};

export default AddReview;
