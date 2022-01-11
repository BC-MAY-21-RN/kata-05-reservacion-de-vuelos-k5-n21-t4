import React, { useEffect, useState} from 'react';
import {PswrdInput, Input} from '../Components/InputLog';
<<<<<<< HEAD
import {Container, Texto, TochOP} from '../Assets/styled';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
=======
import {Container, Texto, TochOP, GoogleBtn} from '../Assets/styled';
import auth from '@react-native-firebase/auth'
>>>>>>> origin/Integration

import { Text } from 'react-native'
import { GoogleSigninButton, GoogleSignin } from '@react-native-google-signin/google-signin';
import { getUserdata, loginAuth } from '../utils/firebase/FirebaseFunctions'

GoogleSignin.configure({
  webClientId: '43375129789-19d3mo4bim7cgmt6d7co7lr44doerqti.apps.googleusercontent.com'
});

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


<<<<<<< HEAD
  const login = async () =>{
    try{
      await auth().signInWithEmailAndPassword(email, pswrd)
      .then((res)=>{
        firestore()
          .collection('Users')
          .doc(res.user.uid)
          .get()
          .then(res2=>{
            alert("Welcome "+res2._data.name)
            setInfoUser(res2._data)
            navigation.navigate('My Flights', infoUser)
          })
      })
      .catch((e)=>{
        console.log(e)
      })
    }
    catch (e){
      console.log(e)
    }
  }

  const signIn = async () => {
=======
  const signInGoogle = async () => {
>>>>>>> origin/Integration
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
<<<<<<< HEAD
    await auth().signInWithCredential(googleCredential).then((resp)=>{
      firestore()
      .collection('Users')
      .doc(resp.user.uid)
      .get()
      .then(res2=>{
        alert("Welcome "+res2._data.name)
        setInfoUser(res2._data)
        navigation.navigate('My Flights', infoUser)
      })
=======
    await auth().signInWithCredential(googleCredential).then((res)=>{
      navigation.navigate("My Flights", getUserdata(res))
>>>>>>> origin/Integration
    })
  };

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
          onPress={signInGoogle}
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

        <Texto
          color={'#5974f5'}
          onPress={() => navigation.navigate('My Flights')}
          style={{color: '#5974f5'}}>
          {'\n'}My Flights
        </Texto>

        <Texto
          color={'#5974f5'}
          onPress={() => navigation.navigate('Origen')}
          style={{color: '#5974f5'}}>
          {'\n'}Add flight
        </Texto>

      </Texto>
    </Container>
  );
};
