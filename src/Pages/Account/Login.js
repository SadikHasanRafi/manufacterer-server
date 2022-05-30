import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useFirebaseGoogle from "../../Hooks/useFirebaseGoogle";
import useMailPassword from "../../Hooks/useMailPassword";
import Loading from "../../Shared/Loading";


const Login = () => {
  let navigate = useNavigate()
  const {googleSignInSignUp, loading, error} = useFirebaseGoogle()
  const { mailPasswordSignIn,newUserLoading,loading:previousUserLoading } = useMailPassword()
  const [user] = useAuthState(auth)
  



  // google sign in 
  const handleGoogleSignIn = async () => {
    await  googleSignInSignUp()
    user && navigate(-1)
  }

  if(user){
 navigate(-1)
  }

  
 
 


  const {    register,    handleSubmit,    watch,    formState: { errors },  } = useForm();

  const onSubmit = (data) => mailPasswordSignIn(data.email,data.password);



  return (
    <div>
    { (loading || newUserLoading || previousUserLoading) && <Loading></Loading> }
      <div className="hero h-[80vh] sm:h-[100vh]">
      <div className="card flex-shrink-0 border border-[#9b5de5] w-full max-w-sm bg-base-100">
        <div className="card-body">
          <h1 className="text-2xl text-center pb-5">Login</h1>


          {/* email password base login */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-control w-full max-w-xs"
          >
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            {/* email input */}
            <input
              defaultValue=""
              type="email"
              placeholder="email"
              {...register("email", { required: true })}
              className="input input-bordered input-accent w-full max-w-xs "
            />
            {errors.email && <span>This field is required</span>}
 
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              defaultValue=""
              type="password"
              placeholder="password"
              {...register("password", { required: true })}
              className="input input-bordered input-accent w-full max-w-xs"
            />
            {errors.password && <span>This field is required</span>}
   
   


            <label className="label">
              <p>
                New user?
                <Link
                  to="/signup"
                  className="label-text-alt link link-hover text-secondary"
                >
                  Create a new account
                </Link>
              </p>
            </label>

          {/* submit button */}
            <input type="submit" value="Submit" className="btn  " />
          </form>
          {/* ________________________________ */}
          
          
          
          <div className="divider">OR</div>



          {/* google sign in  */}
          <input type="submit" onClick={handleGoogleSignIn} value="Sign in with google" className="btn" />
          {/* ________________________________ */}




        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
