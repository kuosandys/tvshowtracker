import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Init firebase app
firebase.initializeApp(firebaseConfig);

// auth
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

// firestore
const firestore = firebase.firestore();

const getUserDocument = async (userEmail) => {
  if (!userEmail) {
    return null;
  }

  try {
    const userDocument = await firestore
      .collection("users")
      .doc(userEmail)
      .get();
    return {
      ...userDocument.data(),
    };
  } catch (error) {
    console.log("Error getting user data", error);
  }
};

const generateUserDocument = async (user, data) => {
  if (!user) {
    return;
  }

  // get user document
  const userReference = firestore.collection("users").doc(user.email);
  const snapshot = await userReference.get();

  // If no document exists for user, create document
  if (!snapshot.exists) {
    const { email, displayName } = user;
    try {
      await userReference.set({
        displayName,
        email,
        ...data,
      });
    } catch (error) {
      alert(error);
    }
  }
  return getUserDocument(user.email);
};

export { auth, firestore, signInWithGoogle, generateUserDocument };
