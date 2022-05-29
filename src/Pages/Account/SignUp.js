import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import AddUserInfo from '../../Components/AddUserInfo';
import auth from '../../firebase.init';
import useFirebaseGoogle from '../../Hooks/useFirebaseGoogle';
import useMailPassword from '../../Hooks/useMailPassword';
import Loading from '../../Shared/Loading';

const SignUp = () => {
  
  const {googleSignInSignUp, loading, error} = useFirebaseGoogle()
  const { mailPasswordSignUp,newUserLoading,loading:previousUserLoading } = useMailPassword()

//google sign up
const handleGoogleSignUp = () => {
  
  googleSignInSignUp() 
}



//mail password login
const handleMailPasswordSignUp = () =>{
  
}


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => mailPasswordSignUp(data.email,data.password);
return (

  <div>

    { (loading || newUserLoading || previousUserLoading) && <Loading></Loading> }
    <div className="hero h-[80vh] sm:h-[100vh]">
  <div class="card flex-shrink-0 border border-[#9b5de5] w-full max-w-sm bg-base-100">
    <div class="card-body">
    <h1 className="text-2xl text-center pb-5">Sign Up</h1>
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


        <input type="submit" value="Register" class="btn" />
        </form>
      <div class="divider">OR</div>

{/* google sign up  */}
        <input type="submit"  onClick={handleGoogleSignUp}  value="Create account by Google" class="btn" />
        



    </div>
  </div>


</div>
  </div>

    );
};

export default SignUp;