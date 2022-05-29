import React from 'react';
import auth from '../firebase.init';
import {useAuthState, useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'
import AddUserInfo from '../Components/AddUserInfo';

const useMailPassword = () => {
    const [createUserWithEmailAndPassword, newu ,newUserLoading ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithEmailAndPassword, u, loading ] = useSignInWithEmailAndPassword(auth);
    



  

    const mailPasswordSignUp = (email,password) => {
     
        createUserWithEmailAndPassword(email,password)
        
    }
    const mailPasswordSignIn = (email,password) => {
      
        signInWithEmailAndPassword(email,password)
        
    }

    return {mailPasswordSignUp,mailPasswordSignIn, newUserLoading, loading}
};

export default useMailPassword;