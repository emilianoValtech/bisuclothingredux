import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
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
const provider = new GoogleAuthProvider();

//Makes the user always select wich account
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

//General functions to sign in passing the instance for auth and google auth provider
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
// export const signInWithRedirect = () => signInWithRedirect(auth, provider)

//Get our database from firestore service
export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  // create the instance of a document
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef)
  // get the instance of the document created
  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)
  //if user does not exist
  if(!userSnapshot.exists()){
    //get the user data
    const {displayName, email} = userAuth;
    const createdAt = new Date()
    try {
      //create the doc and pass the object model
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }

  return userDocRef
}