// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD71nSCO9vKosOcO9J_NHr9k84MEzkW7Vo",
  authDomain: "learning-fluorescence.firebaseapp.com",
  projectId: "learning-fluorescence",
  storageBucket: "learning-fluorescence.appspot.com",
  messagingSenderId: "763591271370",
  appId: "1:763591271370:web:f59e21f320081937e9e533",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default auth;
