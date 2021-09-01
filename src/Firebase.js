import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDocujrTWbc3sCw68-Zuhiaz-sfeh_xLlc",
  authDomain: "gallery-c3e79.firebaseapp.com",
  projectId: "gallery-c3e79",
  storageBucket: "gallery-c3e79.appspot.com",
  messagingSenderId: "31878024829",
  appId: "1:31878024829:web:c63d7fc123208d76206b14",
  measurementId: "G-8V1DT9N7Z2"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };
