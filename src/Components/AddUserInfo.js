import React, { useEffect } from 'react';
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';



const AddUserInfo =  () => {
    const [user] = useAuthState(auth)

    useEffect(  () => {
         if (user!=null) {
            axios.post("http://localhost:8000/adduser",user).then( res => {
                toast.success("Successfully signed in.");
            })
         }
         else{
            toast.success("Successfully signed out.");

         }
    }, [user])
    
   


    
    console.log("user - ", user)

   

   return (<div> <Toaster /></div>);
   
};

export default AddUserInfo;