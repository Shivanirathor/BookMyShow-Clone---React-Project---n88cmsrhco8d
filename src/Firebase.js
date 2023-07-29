// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCNgHp4mjyoA-T1MX9KI40_OLQVKa5bueE",
  authDomain: "bookmyshow-d373c.firebaseapp.com",
  projectId: "bookmyshow-d373c",
  storageBucket: "bookmyshow-d373c.appspot.com",
  messagingSenderId: "273415068844",
  appId: "1:273415068844:web:a1d1e1bc06ef8bb6b8d309",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
