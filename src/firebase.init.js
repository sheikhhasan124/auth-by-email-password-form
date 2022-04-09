// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyFc63SXlH984bVGq4xf8HUow5Xa6a8HQ",
  authDomain: "email-password-auth-ac10a.firebaseapp.com",
  projectId: "email-password-auth-ac10a",
  storageBucket: "email-password-auth-ac10a.appspot.com",
  messagingSenderId: "675664585231",
  appId: "1:675664585231:web:9c57a4c88bb4e23fae797a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;