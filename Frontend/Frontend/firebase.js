// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAI7bCQLJSwkJxzHVpyn5dInbsqcgTkaig",
  authDomain: "travel-scout-640e7.firebaseapp.com",
  databaseURL: "https://travel-scout-640e7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "travel-scout-640e7",
  storageBucket: "travel-scout-640e7.firebasestorage.app",
  messagingSenderId: "304845202764",
  appId: "1:304845202764:web:175f24f7ed5432d2e95be9",
  measurementId: "G-GJFBGTYMEH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;