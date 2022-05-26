import React from 'react';

const Product = () => {
    return (
        <div>
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
    );
};

export default Product;