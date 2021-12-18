import React, {useState} from "react";
import { Container, CBox, TextButton, TochOP, InputLog, PrimeTitle, SecondTitle, InfoText, Required, CheckText, CheckBoxCon } from '../Assets/styled';
import { View } from 'react-native'

import styled from "styled-components";
//import MyTextInput from "../Components/InputLog";
//import Checkbox from '../Components/Checkbox';

export const SignUp = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)    

    const [hidePassword, setHidePassword] = useState(true);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");
    const [focus, setFocusState] = useState(false)
    
    const SignUp = (e) => {
      try {
          auth.createUserWithEmailAndPassword(email, password)
          ToastAndroid.show("registro exitoso", ToastAndroid.SHORT)
      } catch (e) {
          console.log(e)
          ToastAndroid.show("falla en el registro: " + e, ToastAndroid.SHORT)
      }
  }

    const handleFocus = () => {
      setFocusState(true)
  }

    
  return (
    <Container>
      <PrimeTitle>Sign Up</PrimeTitle>

      {/*<Input>*/}
      <SecondTitle>First Name</SecondTitle>
      <InputLog 
        onChangeText={() => setName(e).target.value}
        placeholder="texto"
        placeholderTextColor={"black"}
        value={name}
      />

      <SecondTitle>Email *</SecondTitle>
      <InputLog 
        onChangeText={() => setEmail(e).target.value}
        placeholder=""
        placeholderTextColor={"black"}
        value={email}
      />
        
      <SecondTitle>Password *</SecondTitle>
      <InputLog 
        onChangeText={() => setPass(e).target.value}
        placeholder=""
        placeholderTextColor={"black"}
        value={pass}
      />

      <CheckBoxCon>
        <CBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={console.log("fuckoff")}

        />
        <CheckText>I agree to the Terms and Privacy Policy</CheckText>
      </CheckBoxCon>

      <CheckBoxCon>
        <CBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={console.log("fuckoff")}
        />
        <CheckText>Subcribe for select product updates</CheckText>
      </CheckBoxCon>
      

      <Required>Use 8 or more characters with a mix of text letters, numbers, and symbols</Required>

      <TochOP >
        <TextButton>Sign Up</TextButton>
      </TochOP>

      <InfoText> or </InfoText>

      <TochOP>
        <TextButton>
       
        Sign Up with Google</TextButton>
         
      </TochOP>
      <InfoText>Alredy have an account?</InfoText>
    </Container>
  );
};


/**
 Input de la contraseña
 * <MyTextInput
        keyboardType={null}
        placeholder="Contraseña"
        image="lock"
        bolGone={true}
        secureTextEntry={hidePassword}
        onPress={() => setHidePassword(!hidePassword)}
        value={pswrd}
        onChangeText={(pswrd) => setPswrd(pswrd)}
        />
        
    * Input para el correo 
        <MyTextInput
          keyboardType="email-address"
          placeholder="Correo"
          image="user"
          value={user}
          onChangeText={(user) => setUser(user)}
        />
 */