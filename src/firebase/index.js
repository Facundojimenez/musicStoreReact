// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBNjbAwc5MzEDYU0APx6Aa1vMuCnyU2W8s",
  authDomain: "musicstorereact.firebaseapp.com",
  projectId: "musicstorereact",
  storageBucket: "musicstorereact.appspot.com",
  messagingSenderId: "347913622115",
  appId: "1:347913622115:web:90bf60e04ddef33af15e56",
  measurementId: "G-L0M6QJVVES"
};

const app = initializeApp(firebaseConfig);


//getData devuelve la conexión con firestore a mi app
export const getDatabase = () => getFirestore(app);