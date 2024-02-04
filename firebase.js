// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getDatabase} from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyCXOKF8rv5iFJhogAU8VqF7Y8POW_ZBf-k",
  authDomain: "p2p-zhagaram.firebaseapp.com",
  databaseURL: "https://p2p-zhagaram-default-rtdb.firebaseio.com",
  projectId: "p2p-zhagaram",
  storageBucket: "p2p-zhagaram.appspot.com",
  messagingSenderId: "236906990610",
  appId: "1:236906990610:web:d9ca82fa23390c8e2b9ccb",
  measurementId: "G-WJT5EHTFRC"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const db =getDatabase(app);