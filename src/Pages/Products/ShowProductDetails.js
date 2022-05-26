import React from "react";
import BuyNowModal from "./BuyNowModal";

const ShowProductDetails = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row">
          <img
            src="https://api.lorem.space/image/movie?w=260&h=400"
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-5xl font-bold">Box Office News!</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

            <p>In stock: <span>54</span></p>
            <p>Price per unit: <span>$504</span></p>

            <div>
            <input type="number" defaultValue='30'   class="input mr-5 input-bordered input-accent  w-32  max-w-xs" />
              
              <label for="buy-modal"  class="btn btn-primary modal-button w-32 ">Buy now</label>
                <BuyNowModal></BuyNowModal>
            </div>
          
          </div>
        </div>
      </div>


      
    </div>
  );
};

export default ShowProductDetails;