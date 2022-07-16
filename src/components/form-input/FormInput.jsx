import React from 'react';
import {FormInputLabel,Group,Input } from './styles';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel
          htmlFor={label}
          shrink={otherProps.value.length}
        >
          {label}
        </FormInputLabel>
      )}

    </Group>
  );
};

export default FormInput;
