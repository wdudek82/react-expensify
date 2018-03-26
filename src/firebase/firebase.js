import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyACgCaSjEJeF9pQDxN6dtKI8p-uijV8MHY",
  authDomain: "expensify-b2882.firebaseapp.com",
  databaseURL: "https://expensify-b2882.firebaseio.com",
  projectId: "expensify-b2882",
  storageBucket: "expensify-b2882.appspot.com",
  messagingSenderId: "915990714023"
};

firebase.initializeApp(config);

const database = firebase.database();