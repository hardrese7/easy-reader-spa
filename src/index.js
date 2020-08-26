import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebaseConfig = {
  apiKey: 'AIzaSyCEsF8mwskqeubMUJfJeLXLIory-AlG0Ks',
  authDomain: 'easyreader-56a60.firebaseapp.com',
  databaseURL: 'https://easyreader-56a60.firebaseio.com',
  projectId: 'easyreader-56a60',
  storageBucket: 'easyreader-56a60.appspot.com',
  messagingSenderId: '792027254518',
  appId: '1:792027254518:web:2be6ccabb02f8b3223a6d7',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
