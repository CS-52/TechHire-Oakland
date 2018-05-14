import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCeYjYlguHRRNtXkNvYbEEK8DV-ROrm-YM",
  authDomain: "cs52-techhire.firebaseapp.com",
  databaseURL: "https://cs52-techhire.firebaseio.com",
  projectId: "cs52-techhire",
  storageBucket: "",
  messagingSenderId: "310701385810"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
