import React from 'react';

const Product = (product) => {
  console.log('products',product.product)
  const {_id,amount,description,name,pic,price} = product.product
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              srcSet={pic}
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{name}</h2>
            <p>{description}</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary"> <p className="text-xl">Buy Now <span >${price}</span></p>/<sub> piece</sub> </button>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Product;