import React, { useState } from 'react';
import auth from '../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const useFirebaseGoogle = () => {
     const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

   const [userData, setUserData ] = useState(null)

   // if (user) {
   //    const data = {
   //       uid: user?.user?.uid,
   //       displayName: user?.user?.displayName,
   //       email: user?.user?.email,
   //       photoURL: user?.user?.photoURL
   //    }
   //    setUserData(data)
   // }


    const googleSignInSignUp = () => {
       signInWithGoogle()
    }
    
   //  console.log(user.user)
   //  console.log(user)
    
    return {googleSignInSignUp,loading, error}
};

export default useFirebaseGoogle;