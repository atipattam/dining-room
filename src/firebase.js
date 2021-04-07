import firebase from "firebase";
  const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyBIlEdjgGz9jxdGK8ezRaRHaWC9LeRKdvE",
    authDomain: "cloud-final-e87aa.firebaseapp.com",
    databaseURL: "https://cloud-final-e87aa.firebaseio.com",
    projectId: "cloud-final-e87aa",
    storageBucket: "cloud-final-e87aa.appspot.com",
    messagingSenderId: "363681422529",
    appId: "1:363681422529:web:68a040e1d963aad7824840",
    measurementId: "G-R12JND03T1"

  });
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{ db, auth, storage,provider};
  