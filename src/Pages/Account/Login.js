import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="hero h-[80vh] sm:h-[100vh]">
      <div class="card flex-shrink-0 border border-[#9b5de5] w-full max-w-sm bg-base-100">
        <div class="card-body">
        <h1 className="text-2xl text-center pb-5">Login</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            class="form-control w-full max-w-xs"
          >
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              defaultValue=""
              type="email"
              placeholder="email"
              {...register("email", { required: true } ) }
              class="input input-bordered input-accent w-full max-w-xs "
            />
            {errors.email && <span>This field is required</span>}


            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              defaultValue=""
              type="password"
              placeholder="password"
              {...register("password", { required: true })}
              class="input input-bordered input-accent w-full max-w-xs"
            />
            {errors.password && <span>This field is required</span>}

            <label class="label">
              <p>
                New user?
                <a
                  class="label-text-alt link link-hover text-secondary"
                >
                  Create a new account
                </a>
              </p>
            </label>

            <input type="submit" value="Submit" class="btn" />
          <div class="divider">OR</div>
            <input type="submit" value="Sign in with google" class="btn" />
          </form>
        </div>
      </div>


    </div>
  );
};

export default Login;
