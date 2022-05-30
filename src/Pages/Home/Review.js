import React from "react";

const Review = (props) => {
  const {review:userREview} = props
  const {_id , rating , review } = userREview
  return (
    <div>
      <div className="flex justify-center pb-24 mb-10 flex-wrap">
        <div className="card w-[100vw] sm:w-[30vw] lg:w-[50vw] bg-primary text-primary-content mb-6">
          <div className="card-body">
            <h2 className="card-title">Anonymous{_id}</h2>
            <p>"{review}"</p>
            <p>{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
