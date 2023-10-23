// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB42BHK2NiR2iBBpOSnp0v5wnzI1raNDIc",
  authDomain: "event-management-10a43.firebaseapp.com",
  projectId: "event-management-10a43",
  storageBucket: "event-management-10a43.appspot.com",
  messagingSenderId: "905954531817",
  appId: "1:905954531817:web:c1c1bb93dda44f42ec1378"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

