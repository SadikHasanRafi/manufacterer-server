import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "../../../Shared/Loading";
import SuccessToast from "../../../Shared/SuccessToast/SuccessToast";
import { async } from "@firebase/util";
import toast, { Toaster } from "react-hot-toast";

const AddReview = () => {
  const [review, setReview] = useState("");
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    setReview(data);
    console.log(data)

    await axios.post("https://glacial-tundra-61856.herokuapp.com/addreview", data).then((res) => {
      console.log(res?.data.success);
      if (res?.data.success === true) {
        toast.success("Review successfully added.");
      }
    });
  };

  return (
    <div className="flex flex-1 justify-center h-screen items-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <textarea
          rows="10"
          cols="30"
          defaultValue={review}
          {...register("review", { required: true })}
          className="textarea textarea-secondary"
          placeholder="Review"
        ></textarea>

        <div className="rating gap-10 m-5">
          <input
            type="radio"
            value="1"
            {...register("rating")}
            name="rating"
            className="mask mask-star bg-yellow-400"
            defaultValue={review}
          />
          <input
            type="radio"
            value="2"
            {...register("rating")}
            name="rating"
            className="mask mask-star bg-yellow-400"
            defaultValue={review}
          />
          <input
            type="radio"
            value="3"
            {...register("rating")}
            name="rating"
            className="mask mask-star bg-yellow-400"
            defaultValue={review}
          />
          <input
            type="radio"
            value="4"
            {...register("rating")}
            name="rating"
            className="mask mask-star bg-yellow-400"
            defaultValue={review}
          />
          <input
            type="radio"
            value="5"
            {...register("rating")}
            name="rating"
            className="mask mask-star bg-yellow-400"
            defaultValue={review}
          />
        </div>

        <input className="btn btn-outline btn-success my-2" type="submit" />
        <Toaster />
      </form>
    </div>
  );
};

export default AddReview;
