import React from 'react';
import {Input, FormInputLabel, Group } from './form-input.styles';


const FormInput = ({label, ...otherprops}) => {
  return (
     <Group>
        <Input {...otherprops}></Input>
        { label && (
           <FormInputLabel shrink={otherprops.value.length}>{label} </FormInputLabel>
        )}
     </Group>
  )
}

export default FormInput