import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {InpCon, Image, InpL, InputLog} from '../Assets/styled';
import color from '../Assets/colors';

export function PswrdInput(props) {
  const [border, setBorder] = useState('');
  return (
    <InpCon style={{borderColor: border}}>
      <InpL
        style={{alignItems: 'center'}}
        placeholderTextColor={color.LIGHTPRIMARYCOLOR}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        onChangeText={(valor) =>{
          valor.length > 0 ? setBorder('#5974f5') : setBorder('black')
          props.value(valor)}
        }
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

export function UserInput(props) {
  const [border, setBorder] = useState('');
  return (
    <InpCon style={{borderColor: border}}>
      <InputLog
        placeholder={props.placeholder}
        onChangeText={(valor) => {valor.length > 0 ? setBorder('#5974f5') : setBorder('black')
          props.value(valor)}
        }
      />
    </InpCon>
  );
}

export function NameInput(props) {
  const [border, setBorder] = useState('');
  return (
    <InpCon style={{borderColor: border}}>
      <InputLog
        placeholder={props.placeholder}
        onChangeText={
          (valor) => {valor.length > 0 ? setBorder('blue') : setBorder('black')
          props.value(valor)}
        }
      />
    </InpCon>
  );
}
