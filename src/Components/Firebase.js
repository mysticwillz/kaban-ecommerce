// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyD40FWEengbeO5iTLysOzZimaSb7iLDvpk",
  authDomain: "kaban-ecommerce.firebaseapp.com",
  projectId: "kaban-ecommerce",
  storageBucket: "kaban-ecommerce.appspot.com",
  messagingSenderId: "650854517107",
  appId: "1:650854517107:web:142da637f85915f3979d06",
  measurementId: "G-KTNMM9FB6X"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db = getFirestore()

 