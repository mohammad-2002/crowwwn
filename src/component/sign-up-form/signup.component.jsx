import React from 'react'
import { useState,useContext } from 'react';
import { createAuthWithEmailAndPassword, createUserDocumentFromAuth,signInWithGooglePopup } from '../../utilites/firebase/firebase.utilites';
import FormInput from '../form-input/form-input.component';
import {SignUpContainer, SignUpHeading} from './sign-up-form.styles';
import Button,{Button_type_classes} from '../button/button.component';

const SignUpFormFields = {
    displayName : '',
    email : '',
    password : '',
    confirmPassword : ''
}

const Signup = () => {

    const [FormFields, setFormFields] = useState(SignUpFormFields);
    const { displayName,email, password, confirmPassword } = FormFields;


   const resetForms = () =>{
    setFormFields(SignUpFormFields);
   } 

   
   const handleSubmit = async(event)=>{
    event.preventDefault();
    if( password !== confirmPassword){
      alert("passwords dosen't match");
      return;
    }
    try {
      const {user} = await createAuthWithEmailAndPassword(email, password);

      await createUserDocumentFromAuth(user, {displayName}) 
      
     
      resetForms();
    } catch (error) {
      if(error.code === "auth/email-already-in-use"){
        alert("Email is already in use");
      }
      console.log("error",error);
    }

   }

   const handleChange = (event) => {
    const {name, value } = event.target;

    setFormFields({...FormFields, [name]:value});
   }
   const logGoogleUser = async () =>{
    const {user} = await signInWithGooglePopup();
                   await createUserDocumentFromAuth(user);
  }

  return (
    <SignUpContainer className='sign-up-container'>
      <SignUpHeading>Don't have an account</SignUpHeading>
      <span>Sign up with your email and password</span>
       <form onSubmit={handleSubmit}>
       <FormInput label="Display Name" type="text" name='displayName' value={displayName} onChange={handleChange}></FormInput>

       <FormInput label="Email" type="email" name='email' value={email} onChange={handleChange}></FormInput>

        <FormInput label="Password" type="password" name='password' value={password} onChange={handleChange}></FormInput>

       
        <FormInput label="Confirm Password" type="password" name='confirmPassword' value={confirmPassword} onChange={handleChange}></FormInput>

        <Button type='submit' >Sign Up</Button>
        <Button buttonType={Button_type_classes.google} onClick={logGoogleUser}>Google Sign Up</Button>

       </form>

    </SignUpContainer>
  )
}

export default Signup