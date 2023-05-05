// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzJR9Pytz5n8ivLo6ZrCC8pyTjS4nW7EU",
  authDomain: "realtime-crud-7e6cf.firebaseapp.com",
  projectId: "realtime-crud-7e6cf",
  storageBucket: "realtime-crud-7e6cf.appspot.com",
  messagingSenderId: "836666434651",
  appId: "1:836666434651:web:00ee33dfec9d5e1e1c0b7e",
  measurementId: "G-0J39KXJS9X",
};

// Initialize Firebase
const firedb = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firedb.database().ref();
