import React, {useState} from "react";
import { Container, CBox, TextButton, TochOP, InputLog, PrimeTitle, SecondTitle, InfoText, Required, CheckText, CBoxCon  } from '../Assets/styled';
import MyTextInput from "../Components/InputLog";
//import Checkbox from '../Components/Checkbox';

export const PruebaLog = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [hidePassword, setHidePassword] = useState(true);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [pswrd, setPswrd] = useState("");
   

    return (
    <Container>
      <PrimeTitle>Sign Up</PrimeTitle>

      
      <SecondTitle>First Name</SecondTitle>
      <InputLog />

      <SecondTitle>Email *</SecondTitle>
      <InputLog />
      
        
      <SecondTitle>Password *</SecondTitle>
      <MyTextInput
        keyboardType={null}
        placeholder="Contraseña"
        secureTextEntry={hidePassword}
        onPress={() => setHidePassword(!hidePassword)}
        value={pswrd}
        onChangeText={(pswrd) => setPswrd(pswrd)}
        />

        <Required>Use 8 or more characters with a mix of text letters, numbers, and symbols</Required>
      <CBoxCon >
        <CBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={console.log('1')}
        />
        <CheckText>I agree to the Terms and Privacy Policy</CheckText>
      </CBoxCon >

      <CBoxCon >
        <CBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={console.log('1')}
        />
        <CheckText>Subcribe for select product updates</CheckText>
      </CBoxCon >
      


      <TochOP >
        <TextButton>Sign Up</TextButton>
      </TochOP>

      <InfoText> or </InfoText>

      <TochOP>
        <TextButton>Sign Up with Google</TextButton>
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