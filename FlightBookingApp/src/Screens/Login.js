import React, {useState} from 'react';
import {Text} from 'react-native'
import {PswrdInput, UserInput} from '../Components/InputLog';
import {Button} from 'react-native';
import { Container, TextButton, TochOP, PrimeTitle, SecondTitle, InfoText} from '../Assets/styled';
import {auth} from 'firebase';

export const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [pswrd, setPswrd] = useState('');
  const [focus, setFocusState] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <Container >
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

        

      <TochOP >
        <TextButton>Sign Up</TextButton>
      </TochOP>

      <InfoText> or </InfoText>

      <TochOP>
        <TextButton>Sign Up with Google</TextButton>
      </TochOP>

      <InfoText >You do not have an account?<Text onPress={() => navigation.navigate('SignUp')} style={{color:'#5974f5'}}> Sign Up</Text></InfoText>
      
    </Container>
  );
};

