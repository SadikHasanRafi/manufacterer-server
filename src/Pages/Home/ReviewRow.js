import React from "react";
import useReviews from "../../Hooks/useReviews";
import Review from "./Review";

const ReviewRow = () => {
    const [reviews,setReviews] = useReviews([])
    const reviewSlice = reviews.slice(0,3)
  return (
    <div>
      <p className=" underline pb-36 uppercase text-center text-5xl ">
        Our Customer review
      </p>

        {
            reviewSlice.map(review => <Review
                review = {review}
                key = {review._id}
            ></Review>)
        }

    </div>
  );
};

export default ReviewRow;
