import React from 'react';
import { useState } from 'react';
import { createAuthWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase';
import Button from '../button/Button';
import FormInput from '../form-input/FormInput';
import './styles.scss'


const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};



const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const {user} = await createAuthWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, {displayName})
      resetFormFields()
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };
  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          name='displayName'
          id='displayName'
          onChange={handleChange}
          value={displayName}
          required
        />
        <FormInput
          label='Email'
          name='email'
          id='email'
          onChange={handleChange}
          value={email}
          required
        />
        <FormInput
          label='Password'
          type='password'
          name='password'
          id='password'
          onChange={handleChange}
          value={password}
          required
        />
        <FormInput
          label='Confirm Password'
          type='password'
          name='confirmPassword'
          id='confirmPassword'
          onChange={handleChange}
          value={confirmPassword}
          required
        />
        <Button buttonType='inverted' type='submit'>Sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
