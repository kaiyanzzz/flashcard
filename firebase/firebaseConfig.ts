// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIjAsVNQH9XUdPcyFoWAI7e0QqgilXonA",
  authDomain: "flashcardgame-8c5fa.firebaseapp.com",
  projectId: "flashcardgame-8c5fa",
  storageBucket: "flashcardgame-8c5fa.firebasestorage.app",
  messagingSenderId: "18111012316",
  appId: "1:18111012316:web:0ac8b9d252a1b494310319"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


