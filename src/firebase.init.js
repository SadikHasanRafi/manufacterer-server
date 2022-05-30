import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  // apiKey: "AIzaSyC4vRkHytjb9ALbzuuZqCJXyED_kQdB9Rg",
  // authDomain: "laptop-accessories.firebaseapp.com",
  // projectId: "laptop-accessories",
  // storageBucket: "laptop-accessories.appspot.com",
  // messagingSenderId: "609999137237",
  // appId: "1:609999137237:web:af05622792d1868715b55c"
  
  apiKey : process.env.REACT_APP_apiKey,
  authDomain : process.env.REACT_APP_authDomain,
  projectId : process.env.REACT_APP_projectId,
  storageBucket : process.env.REACT_APP_storageBucket,
  messagingSenderId : process.env.REACT_APP_messagingSenderId,
  appId : process.env.REACT_APP_appId
};

















// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth