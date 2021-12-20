import React, {useState} from "react";
import {View, StyleSheet, TouchableOpacity, Input, Button, TextInput } from 'react-native'
import {InpCon, ButPswrd, Image, InpL} from '../Assets/styled';
import color from '../Assets/colors'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function MyTextInput(props){
  return (
      <InpCon>
        <InpL
          style={{alignItems: 'center'}}
          placeholderTextColor={color.LIGHTPRIMARYCOLOR}
          placeholder={props.placeholder}
          secureTextEntry={props.secureTextEntry}
        />
        <ButPswrd onPress = {props.onPress}>
          <Image  source = { (props.secureTextEntry) ? require('../Img/ver.png') : require('../Img/ojo.png')}/>
        </ButPswrd>

      </InpCon>
    )
}