// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtK9A1EZGdG28qPbFrbU4E7lnhi5IK5Vc",
  authDomain: "smartwidgets-website.firebaseapp.com",
  projectId: "smartwidgets-website",
  storageBucket: "smartwidgets-website.appspot.com",
  messagingSenderId: "126534531673",
  appId: "1:126534531673:web:3cb3ad3d702218566c0f48",
  measurementId: "G-TXEHCJ8JF0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);