import React from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase';

import SignUpForm from '../../components/sign-up-form/SignUpForm';
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with google</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
