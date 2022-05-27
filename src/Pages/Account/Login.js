import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import useFirebaseGoogle from "../../Hooks/useFirebaseGoogle";
import Loading from "../../Shared/Loading";


const Login = () => {
  const {googleSignInSignUp,user, loading, error} = useFirebaseGoogle()


  // google sign in 
  const handleGoogleSignIn = () => {
    googleSignInSignUp()
  }
  
  console.log(user)
 


  const {    register,    handleSubmit,    watch,    formState: { errors },  } = useForm();

  const onSubmit = (data) => console.log(data);



  return (
    <div>
      {loading && <Loading></Loading> }
      <div className="hero h-[80vh] sm:h-[100vh]">
      <div class="card flex-shrink-0 border border-[#9b5de5] w-full max-w-sm bg-base-100">
        <div class="card-body">
          <h1 className="text-2xl text-center pb-5">Login</h1>


          {/* email password base login */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            class="form-control w-full max-w-xs"
          >
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            {/* email input */}
            <input
              defaultValue=""
              type="email"
              placeholder="email"
              {...register("email", { required: true })}
              class="input input-bordered input-accent w-full max-w-xs "
            />
            {errors.email && <span>This field is required</span>}
            {/* ________________________________ */}



            {/* password input */}
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
            {/* ________________________________ */}



            <label class="label">
              <p>
                New user?
                <Link
                  to="/signup"
                  class="label-text-alt link link-hover text-secondary"
                >
                  Create a new account
                </Link>
              </p>
            </label>

          {/* submit button */}
            <input type="submit" value="Submit" class="btn" />
          </form>
          {/* ________________________________ */}
          
          
          
          <div class="divider">OR</div>



          {/* google sign in  */}
          <input type="submit" onClick={handleGoogleSignIn} value="Sign in with google" class="btn" />
          {/* ________________________________ */}




        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
