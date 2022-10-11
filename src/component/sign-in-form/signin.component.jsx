import React from "react";
import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  SignInAuthWithEmailAndPassword,
} from "../../utilites/firebase/firebase.utilites";
import FormInput from "../form-input/form-input.component";
import {
  SignInContainer,
  SignInButton,
  SignInHeading,
} from "./sign-in-form.styles";
import Button, { Button_type_classes } from "../button/button.component";

const SignInFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [FormFields, setFormFields] = useState(SignInFormFields);
  const { email, password } = FormFields;

  const resetForms = () => {
    setFormFields(SignInFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await SignInAuthWithEmailAndPassword(email, password);
      resetForms();
      
    } catch (error) {
      console.log(error);
      if (error.code === "auth/wrong-password") {
        alert("Incorrect Password");
      } else if (error.code === "auth/user-not-found") {
        alert("Incorrect Email");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...FormFields, [name]: value });
  };
  //  console.log(FormFields);
  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  return (
    <SignInContainer>
      <SignInHeading>Don't have an account</SignInHeading>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        ></FormInput>

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        ></FormInput>

        <SignInButton>
          <Button type="submit" onClick={handleSubmit}>
            Sign In
          </Button>

          <Button
            buttonType={Button_type_classes.google}
            type="button"
            onClick={logGoogleUser}
          >
            Sign In Google
          </Button>

        </SignInButton>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
