import React from "react";
import { useForm } from "react-hook-form";

const BuyNowModal = (props) => {
  const { singleProduct, orderAmount } = props;
  const { amount, description, name, pic, price, _id } = singleProduct;
  const { amount: orderAmout } = orderAmount;
  console.log(orderAmout, amount);
  return (
    <div className=" mb-2 z-50  absolute">
      {/* modal section */}

      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Congratulations random Interner user!
          </h3>
          <p class="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div class="modal-action">
            <label for="my-modal-6" class="btn">
              Buy now
            </label>
          </div>
          <div class="modal-action">
            <label for="my-modal-6" class="btn">
              close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNowModal;
