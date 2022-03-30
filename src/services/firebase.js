import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBOxmuh4fLmkAhuyfOU3pi7iik5FTMBz7Q",
  authDomain: "chatty-78188.firebaseapp.com",
  projectId: "chatty-78188",
  storageBucket: "chatty-78188.appspot.com",
  messagingSenderId: "76595408491",
  appId: "1:76595408491:web:718b0d0499594b614f0b2e",
  measurementId: "G-XNW75Z8VY8"
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp
export const auth = firebaseApp.auth;
export const db = firebaseApp.database();
