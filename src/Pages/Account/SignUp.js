import React from 'react';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => console.log(data);
    
    return (
        <div className="hero min-h-screen bg-base-200">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
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
              {...register("example")}
              class="input input-bordered input-accent w-full max-w-xs "
            />

            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              defaultValue=""
              type="password"
              placeholder="password"
              {...register("exampleRequired", { required: true })}
              class="input input-bordered input-accent w-full max-w-xs"
            />

            <label class="label">
              <p>
                New user?
                <a
                  href="#"
                  class="label-text-alt link link-hover text-secondary"
                >
                  Create a new account
                </a>
              </p>
            </label>
            {/* {errors.exampleRequired && <span>This field is required</span>} */}

            <input type="submit" value="Submit" class="btn" />
          <div class="divider">OR</div>
            <input type="submit" value="Sign in with google" class="btn" />
          </form>
        </div>
      </div>
    </div>
    );
};

export default SignUp;