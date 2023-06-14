import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCmxjhcOnTOOHoEaiN7AUXPg62C1cUVQog",
    authDomain: "cyberexpert-70e19.firebaseapp.com",
    projectId: "cyberexpert-70e19",
    storageBucket: "cyberexpert-70e19.appspot.com",
    messagingSenderId: "499302128018",
    appId: "1:499302128018:web:564fad3cbcef3cce23894b",
    measurementId: "G-Q1FG3WCWKS"
  };

// Check if Firebase app is already initialized

    // Initialize Firebase with the provided config
firebase.initializeApp(firebaseConfig);

export default firebase;
