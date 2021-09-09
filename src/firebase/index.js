// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNjbAwc5MzEDYU0APx6Aa1vMuCnyU2W8s",
  authDomain: "musicstorereact.firebaseapp.com",
  projectId: "musicstorereact",
  storageBucket: "musicstorereact.appspot.com",
  messagingSenderId: "347913622115",
  appId: "1:347913622115:web:90bf60e04ddef33af15e56",
  measurementId: "G-L0M6QJVVES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


//getData devuelve la conexión con firestore a mi app
export const getDatabase = () => getFirestore(app);