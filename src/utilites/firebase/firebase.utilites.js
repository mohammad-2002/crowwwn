import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4ukKGSj-j8lbexR4rjjGDODFaQv3FHgU",
  authDomain: "crownn-db-932ad.firebaseapp.com",
  projectId: "crownn-db-932ad",
  storageBucket: "crownn-db-932ad.appspot.com",
  messagingSenderId: "290729591029",
  appId: "1:290729591029:web:f2025459d36830e4d3c5bc",
};

// Initialize Firebas
const firebaseapp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.getCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const CollectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const DocRef = doc(CollectionRef, object.title.toLowerCase());
    batch.set(DocRef, object);
  });
  await batch.commit();
  console.log("done");
};


export const getCollectionsAndDocuments= async()=>{
  const CollectionRef = collection(db, 'category');
  const q = query(CollectionRef);
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(docSnapShot => docSnapShot.data());

}



export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const date = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        date,
        ...additionalInformation,
      });
    } catch {
      console.log("error");
    }
  }

  return userDocRef;
};

export const createAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const SignInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  await signOut(auth);
};

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
