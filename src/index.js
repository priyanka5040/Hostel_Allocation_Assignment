import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBxW5xnIwO4KrC-pNcXxR5WAaeR9N1ZEU4",
  authDomain: "hostel-management-d7166.firebaseapp.com",
};

if(!firebase.apps[0]){
  firebase.initializeApp(firebaseConfig);
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
