// import firebase from ".firebase/app";    
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAQz6vobimU6_meeZLn5-fkqo7sEDbEdB4",
    authDomain: "movie-b6a74.firebaseapp.com",
    projectId: "movie-b6a74",
    storageBucket: "movie-b6a74.appspot.com",
    messagingSenderId: "533097665780",
    appId: "1:533097665780:web:412f9cd8a2dcf14cdcfaa1",
    measurementId: "G-MNJ5H8YZK5"
  };

  // firebase.initializeApp(firebaseConfig);

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  // export default firebase;

  export default db;

