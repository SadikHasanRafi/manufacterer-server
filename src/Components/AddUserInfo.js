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

            
            axios.put(`http://localhost:8000/addoneuser`,newUser)
            .then( res =>{ 
               console.log(res.data) 
               toast.success("Successfully signed in."); 
            })
               
            
            
            
         }
         else{
           

         }
    }, [user])
    
   


    

   

   return (<div> <Toaster /></div>);
   
};

export default AddUserInfo;