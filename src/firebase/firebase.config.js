// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjoO_e3f0VMRFPNVRbNxhUl5GM_RvMxBI",
  authDomain: "react-social-events.firebaseapp.com",
  projectId: "react-social-events",
  storageBucket: "react-social-events.appspot.com",
  messagingSenderId: "284968824759",
  appId: "1:284968824759:web:f6debbb216b8a2f819c232"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;