import React from "react";

const Review = () => {
  return (
    <div>

        <div>
            <p className=" underline pb-36 uppercase text-center text-5xl ">Our Customer review</p>
                      
        </div>

    <div className="flex flex-cols justify-center justify-evenly pb-24 mb-10">
    <div class="card w-96 bg-primary text-primary-content">
        <div class="card-body">
          <h2 class="card-title">Name</h2>
          <p>"If a dog chews shoes whose shoes does he choose?"</p>
        </div>
      </div>

      <div class="card w-96 bg-primary text-primary-content">
        <div class="card-body">
          <h2 class="card-title">Name</h2>
          <p>"If a dog chews shoes whose shoes does he choose?"</p>
        </div>
      </div>

      <div class="card w-96 bg-primary text-primary-content">
        <div class="card-body">
          <h2 class="card-title">Name</h2>
          <p>"If a dog chews shoes whose shoes does he choose?"</p>
        </div>
      </div>

    </div>


    </div>
  );
};

export default Review;
