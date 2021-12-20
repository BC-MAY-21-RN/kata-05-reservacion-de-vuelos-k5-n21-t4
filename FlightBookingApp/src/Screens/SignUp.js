import React, {useState} from "react";
import { Container, TextButton, TochOP, PrimeTitle, SecondTitle, InfoText, Required, CheckText, CBoxCon} from '../Assets/styled';
import {PswrdInput, UserInput, NameInput} from "../Components/InputLog";
import CheckBox from '@react-native-community/checkbox';

//import Checkbox from '../Components/Checkbox';

export const SignUp = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [hidePassword, setHidePassword] = useState(true);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [pswrd, setPswrd] = useState("");
    const [isSelectedP, setSelectionP] = useState(false);
    const [isSelectedS, setSelectionS] = useState(false);
    
    return (
    <Container>
      <PrimeTitle>Sign Up</PrimeTitle>

      
      <SecondTitle>First Name</SecondTitle>
      <NameInput
        placeholder='First Name'
        
      />

      <SecondTitle>Email *</SecondTitle>
      <UserInput
        placeholder='Email'
      
      />
      
        
      <SecondTitle>Password *</SecondTitle>
      <PswrdInput
        keyboardType={null}
        placeholder="Contraseña"
        secureTextEntry={hidePassword}
        onPress={() => setHidePassword(!hidePassword)}
        value={pswrd}
        onChangeText={(pswrd) =>setPswrd(pswrd)}
        />

        <Required>Use 8 or more characters with a mix of text letters, numbers, and symbols</Required>
      <CBoxCon >
        <CheckBox
            style = {{color: '#5974f5'}}
            value={isSelectedP}
            onValueChange={setSelectionP}
           
        />
        <CheckText>I agree to the Terms and Privacy Policy</CheckText>
      </CBoxCon >

      <CBoxCon >
        <CheckBox
            style = {{color: '#5974f5'}}
           value={isSelectedS}
           onValueChange={setSelectionS}
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

