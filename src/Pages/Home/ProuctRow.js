import React from "react";

const ProuctRow = () => {
  return (
    <div className=" pb-24 ">

<div className=" mb-10 p-8 pb-24">
            <p className="text-center p-3 text-5xl uppercase">Grow You business with us</p>
            <p className="text-center text-2xl ">Getting accessories is now easier than ever before</p>
        </div>


      <div className="flex flex-cols justify-center justify-evenly">


        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Product name</h2>
            <p>Product description. If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary"> <p className="text-xl">Buy Now <span >$10</span></p>/<sub> piece</sub> </button>
            </div>
          </div>
        </div>

        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Product name</h2>
            <p>Product description. If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary"> <p className="text-xl">Buy Now <span >$10</span></p>/<sub> piece</sub> </button>
            </div>
          </div>
        </div>

        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Product name</h2>
            <p>Product description. If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary"> <p className="text-xl">Buy Now <span >$10</span></p>/<sub> piece</sub> </button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default ProuctRow;
