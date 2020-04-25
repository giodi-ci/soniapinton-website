import * as firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4Z_R8hL4cHR1XoajFynVhgSHLtSr46oQ",
    authDomain: "sonia-pinton-website.firebaseapp.com",
    databaseURL: "https://sonia-pinton-website.firebaseio.com",
    projectId: "sonia-pinton-website",
    storageBucket: "sonia-pinton-website.appspot.com",
    messagingSenderId: "369492133468",
    appId: "1:369492133468:web:65718e58f42656836d8899",
    measurementId: "G-0K0FCS746Q"
  };

// Initialize Firebase
let app = null;

if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);
}

export default firebase;
