import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyDtK9A1EZGdG28qPbFrbU4E7lnhi5IK5Vc",
  authDomain: "smartwidgets-website.firebaseapp.com",
  projectId: "smartwidgets-website",
  storageBucket: "smartwidgets-website.appspot.com",
  messagingSenderId: "126534531673",
  appId: "1:126534531673:web:3cb3ad3d702218566c0f48",
  measurementId: "G-TXEHCJ8JF0"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


var emailInput = document.getElementById('username');
var passwordInput = document.getElementById('password');
var loginButton = document.getElementById('login');


loginButton.addEventListener('click', function() {

  var email = emailInput.value;
  var password = passwordInput.value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function() {
      console.log("Hello")
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode + ': ' + errorMessage);
    });
});