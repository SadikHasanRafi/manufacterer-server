import React, { useEffect, useState } from "react";
import axios from 'axios';
import Review from "./Review";
import useReviews from "../../Hooks/useReviews";

const Reviews = () => {
    const [reviews, setReviews] = useReviews([])

    console.log(reviews)
  return (
    <div>
        {/* {       reviews.map(review => <Review 
                    review = {review} 
                    key = {review._id}
                    ></Review> )
        } */}
        {
            reviews.map(review => <Review
                review = {review}
                key = {review._id}
            ></Review>)
        }
    </div>
  );
};

export default Reviews;
