import React from 'react';
import auth from '../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const useFirebaseGoogle = () => {
     const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    const googleSignInSignUp = () => {
       signInWithGoogle()
    }
    
    
    
    return {googleSignInSignUp,user, loading, error}
};

export default useFirebaseGoogle;