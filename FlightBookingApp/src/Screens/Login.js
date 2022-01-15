import React, { useEffect, useState} from 'react';
import {PswrdInput, Input} from '../Components/InputLog';
import {Container, Texto, TochOP, GoogleBtn} from '../Assets/styled';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { loginAuth, SignInWithGoogle } from '../utils/firebase/FirebaseFunctions'

export const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pswrd, setPswrd] = useState('');
  const [validation, setValidation] = useState({bcolor: '#b6b7ba', disabled: true});
  const [hidePassword, setHidePassword] = useState(true);
  
  useEffect(() => {
    if(email.length>0&&pswrd.length>0)
      setValidation({bcolor: '#5391DA', disabled: false})
    else
      setValidation({bcolor: '#b6b7ba', disabled: true})
  }, [email, pswrd])

  return (
    <Container>
      <Texto size={'16px'}>Email:</Texto>
      <Input placeholder="Email" value={setEmail}/>

      <Texto size={'16px'}>Password:</Texto>
      <PswrdInput
        keyboardType={null}
        placeholder="Contraseña"
        secureTextEntry={hidePassword}
        onPress={() => setHidePassword(!hidePassword)}
        value={setPswrd}
      />

      <TochOP disabled={validation.disabled} onPress={()=>{ loginAuth(navigation, email, pswrd) }} bcolor={validation.bcolor}>
        <Texto size={'18px'} color={'white'} FW={'bold'}>
          Login
        </Texto>
      </TochOP>

      <GoogleBtn>
        <GoogleSigninButton
          style={{ width: 220, height: 50 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={()=>SignInWithGoogle(navigation)}
        />;
      </GoogleBtn>

      <Texto align={'center'} color={'gray'}>
        You do not have an account?
        <Texto
          color={'#5974f5'}
          onPress={() => navigation.navigate('SignUp')}
          style={{color: '#5974f5'}}>
          Sign Up
        </Texto>
      </Texto>
    </Container>
  );
};
