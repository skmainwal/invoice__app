import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBHaxPyqS5nTjI_Uk9wqf5D--SOnJA8uXw",
  authDomain: "whats-app-clone-67a08.firebaseapp.com",
  databaseURL: "https://whats-app-clone-67a08.firebaseio.com",
  projectId: "whats-app-clone-67a08",
  storageBucket: "whats-app-clone-67a08.appspot.com",
  messagingSenderId: "1087596997643",
  appId: "1:1087596997643:web:e9228f08131443964e2b0e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
