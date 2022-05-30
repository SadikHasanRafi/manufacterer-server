import React from 'react';
import { Link } from 'react-router-dom';

const Product = (product) => {
  const {_id,amount,description,name,pic,price} = product.product
    return (
        <div>
          <Link to={`/product/${_id}`}>
            <div className="card w-96 bg-base-100 shadow-md hover:shadow-2xl">
          <figure>
            <img
              srcSet={pic}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary"> <p className="text-xl">Buy Now <span >${price}</span></p>/<sub> piece</sub> </button>
            </div>
          </div>
        </div>
        </Link>
        </div>
    );
};

export default Product;