import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React from 'react';
import auth from '../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';


const googleSignInSignUp = () => {


    //google signin signup
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;

    console.log(user)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    
  
        
};

export default googleSignInSignUp;