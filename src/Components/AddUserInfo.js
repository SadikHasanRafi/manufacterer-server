import React, { useEffect } from 'react';
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';



const AddUserInfo =  () => {
    const [user] = useAuthState(auth)

    useEffect( () => {
         if (user!=null) {
            

            if(user.email === 'rafifakefirebasepreactice13255@gmail.com'){
               user.role = "Admin"
            }
            else{
               user.role='Client'
            }

            const newUser = {
               displayName:user.displayName,
               role:user.role,
               email:user.email,
               photoURL:user.photoURL,
               uid:user.uid,
               fbLink:'',
               nationality:''
            }

            
            axios.get(`http://localhost:8000/showusers/${user.uid}`)
            .then( res => console.log(res.data) )
               
            
            
            axios.post("http://localhost:8000/adduser",newUser).then( res => {
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