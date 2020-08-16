import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDCUkn1mLbngBNGsj3KSsBpFmNRLMyPXAM",
  authDomain: "clone-d1d7d.firebaseapp.com",
  databaseURL: "https://clone-d1d7d.firebaseio.com",
  projectId: "clone-d1d7d",
  storageBucket: "clone-d1d7d.appspot.com",
  messagingSenderId: "943598421419",
  appId: "1:943598421419:web:1f7c5df271cb1580f43eee",
  measurementId: "G-K1B0PESKLH",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
