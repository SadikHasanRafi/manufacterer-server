import React from "react";
import { useForm } from "react-hook-form";

const AddReview = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex flex-1 justify-center items-center">
      <form  onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <textarea rows='3' cols='30' {...register("review")} class="textarea textarea-secondary" placeholder="Review"></textarea>
        <input class="btn btn-outline btn-success my-2" type="submit" />
      </form>
    </div>
  );
};

export default AddReview;
