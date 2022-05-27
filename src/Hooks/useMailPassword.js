import React from 'react';
import auth from '../firebase.init';
import {useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'

const useMailPassword = () => {
    const [createUserWithEmailAndPassword ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithEmailAndPassword ] = useSignInWithEmailAndPassword(auth);
    

    const mailPasswordSignUp = (email,password) => {
        createUserWithEmailAndPassword(email,password)
        
    }
    const mailPasswordSignIn = (email,password) => {
        signInWithEmailAndPassword(email,password)
        
    }

    return {mailPasswordSignUp,mailPasswordSignIn}
};

export default useMailPassword;