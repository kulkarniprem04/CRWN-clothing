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

export const createUserProfileDocument = async (userAuth, AdditionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...AdditionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
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
