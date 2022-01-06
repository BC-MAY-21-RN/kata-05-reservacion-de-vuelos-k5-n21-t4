import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {CheckText, CBoxCon} from '../Assets/styled';

const CheckBoxWithLabel = ({value, changeValue, children, disabled = false}) => {
    return(
      <CBoxCon>
        <CheckBox 
          disabled={disabled}
          value={value}
          onValueChange={(newValue) => changeValue(newValue)}
          tintColors={{true: '#5c6ef8'}}
        />
        <CheckText>
          {children}
        </CheckText>
      </CBoxCon>
    );
  };
  export default CheckBoxWithLabel;