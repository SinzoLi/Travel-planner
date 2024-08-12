// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU_LOKg8WWGH32g9PBPSPqX4ytFL_T20o",
  authDomain: "travle-planner.firebaseapp.com",
  projectId: "travle-planner",
  storageBucket: "travle-planner.appspot.com",
  messagingSenderId: "859219943492",
  appId: "1:859219943492:web:39e5d5a331b05a0cdc5c11",
  measurementId: "G-7RWLJC9YJJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
