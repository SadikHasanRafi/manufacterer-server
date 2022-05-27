// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4vRkHytjb9ALbzuuZqCJXyED_kQdB9Rg",
  authDomain: "laptop-accessories.firebaseapp.com",
  projectId: "laptop-accessories",
  storageBucket: "laptop-accessories.appspot.com",
  messagingSenderId: "609999137237",
  appId: "1:609999137237:web:af05622792d1868715b55c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth