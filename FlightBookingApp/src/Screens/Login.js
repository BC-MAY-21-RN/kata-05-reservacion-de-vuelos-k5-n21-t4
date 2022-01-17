import React, {useEffect, useState} from 'react';
import {PswrdInput, Input} from '../Components/InputLog';
import {Container, Texto, TochOP, GoogleBtn} from '../Assets/styled';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { loginAuth, SignInWithGoogle } from '../utils/firebase/FirebaseFunctions'
import auth from '@react-native-firebase/auth';

import {Text} from 'react-native';
import {
  GoogleSigninButton,
  GoogleSignin,
} from '@react-native-google-signin/google-signin';
import {getUserdata, loginAuth} from '../utils/firebase/FirebaseFunctions';

GoogleSignin.configure({
  webClientId:
    '43375129789-19d3mo4bim7cgmt6d7co7lr44doerqti.apps.googleusercontent.com',
});

export const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [pswrd, setPswrd] = useState('');
  const [validation, setValidation] = useState({
    bcolor: '#b6b7ba',
    disabled: true,
  });
  const [hidePassword, setHidePassword] = useState(true);

  useEffect(() => {
    if (email.length > 0 && pswrd.length > 0)
      setValidation({bcolor: '#5C6EF8', disabled: false});
    else setValidation({bcolor: '#b6b7ba', disabled: true});
  }, [email, pswrd]);

  const signInGoogle = async () => {
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    await auth()
      .signInWithCredential(googleCredential)
      .then(res => {
        navigation.navigate('My Flights', res.user.uid);
      });
  };

  return (
    <Container>
      <Texto size={'16px'}>Email:</Texto>
      <Input placeholder="Email" value={setEmail} />

      <Texto size={'16px'}>Password:</Texto>
      <PswrdInput
        keyboardType={null}
        placeholder="Contraseña"
        secureTextEntry={hidePassword}
        onPress={() => setHidePassword(!hidePassword)}
        value={setPswrd}
      />

      <TochOP
        disabled={validation.disabled}
        onPress={() => {
          loginAuth(navigation, email, pswrd);
        }}
        bcolor={validation.bcolor}>
        <Texto size={'18px'} color={'white'} FW={'bold'}>
          Login
        </Texto>
      </TochOP>
      
      {/**test@gmail.com */}
      <TochOP
        disabled={validation.disabled}
        onPress={signInGoogle}
        bcolor={'#5C6EF8'}>
        <Texto size={'18px'} color={'white'} FW={'bold'}>
          🇬 Sign in with Google
        </Texto>
      </TochOP>

      <Texto align={'center'} color={'gray'}>
        Dont have an account?.
        <Texto
          color={'#5974f5'}
          onPress={() => navigation.navigate('SignUp')}
          style={{color: '#5974f5'}}>
          Sign Up
        </Texto>
        <Texto
          color={'#5974f5'}
          onPress={() => navigation.navigate('Origen')}
          style={{color: '#5974f5'}}>
          {'\n'}Add Flight
        </Texto>
        <Texto
          color={'#5974f5'}
          onPress={() => navigation.navigate('My Flights')}
          style={{color: '#5974f5'}}>
          {'\n'}My Flights
        </Texto>
      </Texto>
    </Container>
  );
};
