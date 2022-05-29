import React from "react";
import { useForm } from "react-hook-form";

const BuyNowModal = (props) => {
  const { singleProduct, orderAmount } = props;
  const { amount, description, name, pic, price, _id } = singleProduct;
  const { amount: orderAmout } = orderAmount;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className=" mb-2">
      {/* modal section */}
      <div className="modal">
        <div class="modal modal-toggle sm:modal-middle" id="buy-modal">
          <div class="modal-box">
            <label
              for="buy-modal"
              class="btn btn-sm btn-circle absolute right-2 top-2 modal-action"
            >
              ✕
            </label>

            <div class="card card-side bg-base-100 shadow-xl">
              <figure>
                <img src={pic} alt="Movie" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <div className=" flex flex-col">
                  <p>
                    Amount: <span>orderAmount</span>
                  </p>
                  <p>
                    Total price: <span>{orderAmount * price}</span>
                  </p>

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-control w-full max-w-xs">
                      <label class="label">
                        <span class="label-text">Enter your address</span>
                      </label>
                      <input
                        defaultValue=""
                        {...register("address", { required: true })}
                        type="text"
                        placeholder="Address"
                        class="input input-bordered w-full max-w-xs"
                      />
                      {errors.address?.type === "required" &&
                        "Address is required"}
                    </div>

                    <div class="form-control w-full max-w-xs">
                      <label class="label">
                        <span class="label-text">Enter your phone number</span>
                      </label>
                      <input
                        type="digit"
                        defaultValue=""
                        {...register("phoneNumber", {
                          pattern: /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/,
                        })}
                        placeholder="Phone number"
                        class="input input-bordered w-full max-w-xs"
                      />
                      {errors.phoneNumber?.type === "required" &&
                        "Invalid phone number"}
                    </div>

                    <input
                      type="submit"
                      value="Cash on delivery"
                      className="mt-6 btn btn-bg-primary"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNowModal;
