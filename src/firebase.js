
import {initializeApp} from "firebase/app";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAi8BWZgMr2ffs3GCPJSNJhHJwg3SFjVjQ",
  authDomain: "cards-website-e52e4.firebaseapp.com",
  projectId: "cards-website-e52e4",
  storageBucket: "cards-website-e52e4.appspot.com",
  messagingSenderId: "756138552040",
  appId: "1:756138552040:web:1d40745e8f831c2a7cb75d",
  measurementId: "G-GXRYESGVEZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


