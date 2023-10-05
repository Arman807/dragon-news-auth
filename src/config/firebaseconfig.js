// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuvSCBAaqXmYxdbprQqYK7L5MQaDGVj3c",
  authDomain: "dragon-news-auth-780ee.firebaseapp.com",
  projectId: "dragon-news-auth-780ee",
  storageBucket: "dragon-news-auth-780ee.appspot.com",
  messagingSenderId: "1071228547422",
  appId: "1:1071228547422:web:9a610e95c8eeee2cb19fcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
