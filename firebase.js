
import { getApp, initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBS5a9Mdh8-mxcG46ivp7Cd0vupoiEdBbE",
  authDomain: "react-native-3bca5.firebaseapp.com",
  projectId: "react-native-3bca5",
  storageBucket: "react-native-3bca5.appspot.com",
  messagingSenderId: "211834853871",
  appId: "1:211834853871:web:28db2fe927f0da7068be1a",
  measurementId: "G-11N90NDBFJ"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export {auth,db};