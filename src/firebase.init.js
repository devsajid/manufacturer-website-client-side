// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId

  apiKey: "AIzaSyAnm3L9qxeep06RzjsloHUwBWJT0eqF0Vo",
  authDomain: "car-manufacturer-app.firebaseapp.com",
  projectId: "car-manufacturer-app",
  storageBucket: "car-manufacturer-app.appspot.com",
  messagingSenderId: "842670612530",
  appId: "1:842670612530:web:a21eb6fefe76514fd65c2b",
  measurementId: "G-M21YL917YE"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;


