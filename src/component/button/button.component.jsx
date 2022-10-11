import React from "react";
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";


export const Button_type_classes = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = Button_type_classes.base) =>
  ({
    [Button_type_classes.base]: BaseButton,
    [Button_type_classes.google]: GoogleSignInButton,
    [Button_type_classes.inverted]: InvertedButton,
  }[buttonType]);


const Button = ({ children, buttonType, ...otherprops }) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton {...otherprops}>{children} </CustomButton>;
};

export default Button;
