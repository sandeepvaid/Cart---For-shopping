import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANXdLnJlMqaeBswjctXVq5dIF5o4D_3-I",
  authDomain: "cart-app-d274c.firebaseapp.com",
  projectId: "cart-app-d274c",
  storageBucket: "cart-app-d274c.appspot.com",
  messagingSenderId: "229782242165",
  appId: "1:229782242165:web:02ef467a660ca67b97493c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

