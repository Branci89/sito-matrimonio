import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBaddhs4-9cFja7CplgCcETT3GhE3am_ac",
  authDomain: "dbelisaeclaudio.firebaseapp.com",
  databaseURL: "https://dbelisaeclaudio-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dbelisaeclaudio",
  storageBucket: "dbelisaeclaudio.appspot.com",
  messagingSenderId: "966222836367",
  appId: "1:966222836367:web:e8073681f186a0c6b8b6fa",
  measurementId: "G-HD0362KW00"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

