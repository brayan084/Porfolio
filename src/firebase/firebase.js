// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN0zO2PqJWaoPowpnokyXGDQn5tj7DL7o",
  authDomain: "porfolio-brayan.firebaseapp.com",
  projectId: "porfolio-brayan",
  storageBucket: "porfolio-brayan.appspot.com",
  messagingSenderId: "484821032295",
  appId: "1:484821032295:web:65983b15766e48a363e3c2",
  measurementId: "G-5TVLR2R444"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);