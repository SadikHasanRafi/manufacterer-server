import React from "react";
import { useForm } from "react-hook-form";

const AddReview = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex flex-1 justify-center items-center">
      <form  onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <textarea rows='3' cols='30' defaultValue="" {...register("review")} class="textarea textarea-secondary" placeholder="Review"></textarea>
        
        <div class="rating gap-1">
          <input type="radio" name="rating-3" class="mask mask-heart bg-red-400" />
          <input type="radio" name="rating-3" class="mask mask-heart bg-orange-400" checked />
          <input type="radio" name="rating-3" class="mask mask-heart bg-yellow-400" />
          <input type="radio" name="rating-3" class="mask mask-heart bg-lime-400" />
          <input type="radio" name="rating-3" class="mask mask-heart bg-green-400" />
        </div>

        <input class="btn btn-outline btn-success my-2" type="submit" />
      </form>
    </div>
  );
};

export default AddReview;
