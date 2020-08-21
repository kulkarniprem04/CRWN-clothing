import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBPQCgcJvn91x6i0aPoLj8E5FFtyTUmzbY",
  authDomain: "crwn-db-2cbb8.firebaseapp.com",
  databaseURL: "https://crwn-db-2cbb8.firebaseio.com",
  projectId: "crwn-db-2cbb8",
  storageBucket: "crwn-db-2cbb8.appspot.com",
  messagingSenderId: "871761151226",
  appId: "1:871761151226:web:3b6597362f90d55e997543",
  measurementId: "G-QZ9Z7PB4V3"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;
