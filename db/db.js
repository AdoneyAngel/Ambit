import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyCjf6dFbQI4eWuoGGpOJOEXuRLftY7nTRE",
  authDomain: "ambit-1350d.firebaseapp.com",
  projectId: "ambit-1350d",
  storageBucket: "ambit-1350d.appspot.com",
  messagingSenderId: "1079902965847",
  appId: "1:1079902965847:web:daadb0d7ea8ced42585312"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db