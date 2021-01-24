import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDTP9sdtMZiKJI5INeiP6hkKnLt-JLW278",
  authDomain: "selfcarevibes.firebaseapp.com",
  projectId: "selfcarevibes",
  storageBucket: "selfcarevibes.appspot.com",
  messagingSenderId: "963242608925",
  appId: "1:963242608925:web:054a88403b9444138f79f4",
  measurementId: "G-FR001KSTPG"
};

const app = firebase.initializeApp(config);
const db = app.database();

export default db;