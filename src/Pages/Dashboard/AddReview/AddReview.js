import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import axios from "axios";
import Loading from "../../../Shared/Loading";
import SuccessToast from "../../../Shared/SuccessToast/SuccessToast";
import { async } from "@firebase/util";
import toast, { Toaster } from 'react-hot-toast';




const AddReview = () => {
  
  const [review,setReview] = useState("")
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setReview(data)
    toast.success('Review Successfully added.')
    
  }

  useEffect(() => {
    axios.post('http://localhost:8000/addreview',review)
    .then(res => console.log(res?.data.success))
  }, [onSubmit])


  


  

  return (
    <div className="flex flex-1 justify-center items-center">
      <form  onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <textarea rows='10' cols='30' defaultValue={review} {...register("review",{ required: true})} class="textarea textarea-secondary" placeholder="Review"></textarea>

        
        <div class="rating gap-10 m-5">
          <input type="radio" value='1' {...register("rating")} name="rating" class="mask mask-star bg-yellow-400" defaultValue={review} />
          <input type="radio" value='2' {...register("rating")} name="rating" class="mask mask-star bg-yellow-400" defaultValue={review} />
          <input type="radio" value='3' {...register("rating")} name="rating" class="mask mask-star bg-yellow-400" defaultValue={review} />
          <input type="radio" value='4' {...register("rating")} name="rating" class="mask mask-star bg-yellow-400" defaultValue={review} />
          <input type="radio" value='5' {...register("rating")} name="rating" class="mask mask-star bg-yellow-400" defaultValue={review} />
        </div>

        <input class="btn btn-outline btn-success my-2" type="submit" />
        <Toaster   />

        
      </form>

    </div>
  );
};

export default AddReview;
