// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyAj5GbbtOO6ZfgKdT_CSG_qIDMqW8Tav3Y",
//   authDomain: "daphnisassignment.firebaseapp.com",
//   projectId: "daphnisassignment",
//   storageBucket: "daphnisassignment.appspot.com",
//   messagingSenderId: "527776589462",
//   appId: "1:527776589462:web:c2f146ce09bd202dfdc4b7"

  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app