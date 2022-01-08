import React, { useState } from 'react';
import { } from 'react-native';
import { useValidation } from 'react-native-form-validator';

const FormTest = () => {
  const [email, setEmail] = useState('tibtib@gmail.com');
  const [newPassword, setNewPassword] = useState('');
  const { validate} =
    useValidation({
      state: {email,newPassword,},
    });

  
}