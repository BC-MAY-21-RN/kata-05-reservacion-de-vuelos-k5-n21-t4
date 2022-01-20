import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {InpCon, Image, InpL, InputLog} from '../Assets/styled';
import color from '../Assets/colors';

export function PswrdInput(props) {
  const [border, setBorder] = useState('');
  return (
    <InpCon BColor={border}>
      <InpL
        keyboardType={null}
        placeholder={'Contraseña'}
        secureTextEntry={props.secureTextEntry}
        onChangeText={valor => {
          valor.length > 0 ? setBorder(color.PRIMARYCOLOR) : setBorder('black');
          props.value(valor);
        }}
      />
      <TouchableOpacity onPress={props.onPress}>
        <Image
          source={
            props.secureTextEntry
              ? require('../Img/ver.png')
              : require('../Img/ojo.png')
          }
        />
      </TouchableOpacity>
    </InpCon>
  );
}

export function Input(props) {
  const [border, setBorder] = useState('');
  return (
    <InputLog
      placeholder={props.placeholder}
      onChangeText={valor => {
        valor.length != '' ? setBorder(color.PRIMARYCOLOR) : setBorder('black');
        props.value(valor);
      }}
      BColor={border}
    />
  );
}
