import React from 'react';
import { BaseButton, GoogleSingInButton, InvertedButton } from './styles';

export const BUTTON_TYPE_CLASSES = {
  base: BaseButton,
  google: GoogleSingInButton,
  inverted: InvertedButton,
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSingInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;

