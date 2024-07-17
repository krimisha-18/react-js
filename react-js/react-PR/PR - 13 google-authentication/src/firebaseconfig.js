
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOvhUR0U5MORF2N7IyLxoOxaRtmQyUMco",
  authDomain: "auth-pr-fbf8c.firebaseapp.com",
  projectId: "auth-pr-fbf8c",
  storageBucket: "auth-pr-fbf8c.appspot.com",
  messagingSenderId: "311591158634",
  appId: "1:311591158634:web:653842c082ef09f3c71b13",
  measurementId: "G-LP4R1PL3RR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const googleAuthProvider = new GoogleAuthProvider();