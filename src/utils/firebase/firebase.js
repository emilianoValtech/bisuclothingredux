import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAsSrDFhIu9OfBMU83qZMpkT5AbhSfEMBc',
  authDomain: 'bisuclothingdb.firebaseapp.com',
  projectId: 'bisuclothingdb',
  storageBucket: 'bisuclothingdb.appspot.com',
  messagingSenderId: '738638044490',
  appId: '1:738638044490:web:d5b3c39b9bf321714fb5b3',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// google auth provider (could be facebook or github, etc)
const googleProvider = new GoogleAuthProvider();

//Makes the user always select wich account
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

//keeps track of auth of the whole app
export const auth = getAuth();

//General functions to sign in passing the instance for auth and google auth provider
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

//Get our database from firestore service
export const db = getFirestore();

//convert JSON into firestore collection
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};

//get the collection categories
export const getCategoriesAndDocuments = async () => {
  //create a ref
  const collectionRef = collection(db, 'categories');
  //create a query passing the ref
  const q = query(collectionRef);

  //snapshots always get a .data()
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());

  // const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
  //   const {title, items} = docSnapshot.data();
  //   acc[title.toLowerCase()] = items;
  //   return acc
  // }, {})

  // return categoryMap
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;
  // create the instance of a document
  const userDocRef = doc(db, 'users', userAuth.uid);
  // get the instance of the document created
  const userSnapshot = await getDoc(userDocRef);
  //if user does not exist
  if (!userSnapshot.exists()) {
    //get the user data
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      //create the doc and pass the object model
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

//create user with email and password (native from firestore)
export const createAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

//sign with email
export const signInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

// sign out
export const signOutUser = async () => await signOut(auth);

//observer
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
