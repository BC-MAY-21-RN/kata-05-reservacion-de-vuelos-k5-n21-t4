import React, {useState } from "react";
import {
  Conteiner,
  TextButton,
  TochOP,
  InputLog,
  PrimeTitle,
  SecondTitle,
  InfoText,
} from '../Assets/styled';
import { CheckBox  } from 'react-native-elements'
//import MyTextInput from "../Components/InputLog";

export const LogUp = () => {
    const [hidePassword, setHidePassword] = useState(true);
    const [user, setUser] = useState("");
    const [pswrd, setPswrd] = useState("");
  
  return (
    <Conteiner>
      <PrimeTitle>Sign Up</PrimeTitle>

      <SecondTitle>First Name</SecondTitle>
      <InputLog></InputLog>

      <SecondTitle>Email *</SecondTitle>
      <InputLog></InputLog>
      
      

        
      <SecondTitle>Password *</SecondTitle>
      <InputLog></InputLog>
     

      <InfoText>Use 8 or more characters with a mix of text letters, numbers, and symbols</InfoText>
      
      

      <TochOP >
        <TextButton>Sign Up</TextButton>
      </TochOP>

      <InfoText> or </InfoText>

      <TochOP>
        <TextButton>Sign Up with Google</TextButton>
      </TochOP>
      <InfoText>Alredy have an account?</InfoText>
    </Conteiner>
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