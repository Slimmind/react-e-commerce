import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBXJUYjmPhdQ90bv3wnTFCrlm_4Hxq7Puo",
  authDomain: "clothing-f2a68.firebaseapp.com",
  databaseURL: "https://clothing-f2a68.firebaseio.com",
  projectId: "clothing-f2a68",
  storageBucket: "clothing-f2a68.appspot.com",
  messagingSenderId: "307802840605",
  appId: "1:307802840605:web:f8cfc59b3469e05d22f0f4",
  measurementId: "G-6RFCCYM6J6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);