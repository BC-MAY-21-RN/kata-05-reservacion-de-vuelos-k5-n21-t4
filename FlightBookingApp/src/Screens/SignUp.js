import React, { useEffect, useState} from 'react';
import {Container, Texto, TochOP1, TextAlert, GoogleBtn} from '../Assets/styled';
import {PswrdInput, Input} from '../Components/InputLog';
import CheckBoxWithLabel from '../Components/Checkbox';
import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import validation from '../Components/SingUpVal';
import { Text } from 'react-native';
import { SignInWithGoogle } from '../utils/firebase/FirebaseFunctions.js';

export const SignUp = ({navigation}) => {
  

  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [pswrd, setPswrd] = useState('');
  const [termsCheckBox, setTermsCheckBox] = useState('');
  const [subscribeCheckBox, setSubscribeCheckBox] = useState('');
  const [info_user, setInfoUser] = useState({});
  
  const addUserToFirestore = () => {
    //Creacion del usuario en la firebase
    auth().createUserWithEmailAndPassword(email, pswrd)
    .then((e)=>{// e recupera lo que es la información
      console.log("User created on auth database in firebase")

      //Creación del usuario en la firestore
      firestore()
      .collection('Users')
      .doc(e.user.uid)//Usa el id que se crea en createuserwithEmailand password para darte titulo al documento del usuario el cual contendra la información
      .set({
        email: email,
        flights: [],
        name: name,
        password: pswrd,
      })
      .then(() => {
        console.log(
          'User registration succesful'
        );
        setInfoUser(e)
        navigation.navigate('My Flights', info_user)
      });
    })
    .catch(e=>{
      console.log(e)
    })
  }

  return (
    <Container>
      <Texto size={'16px'}>First Name</Texto>
      <Input placeholder="Name" value={setName} />

      <Texto size={'16px'}>Email * {email.trim().length > 2 ? '' : <TextAlert>Email con formato invalido</TextAlert>  }</Texto>
      <Input placeholder="Email" value={setEmail} />

      <Texto size={'16px'}>Password *{(pswrd.trim().length > 8 && validation(pswrd)) ? '' : <TextAlert>Password con formato invalido</TextAlert>} </Texto>
      <PswrdInput
        keyboardType={null}
        placeholder="Contraseña"
        secureTextEntry={hidePassword}
        onPress={() => setHidePassword(!hidePassword)}
        value={setPswrd}
      />

      <Texto color={'gray'} MP={'-3% 0% 0% 0%'}>
        Use 8 or more characters with a mix of text letters, numbers, and
        symbols
      </Texto>

      <CheckBoxWithLabel value={termsCheckBox} changeValue={setTermsCheckBox}>
        I agree to the Terms and Privacy policy.
      </CheckBoxWithLabel>

      <CheckBoxWithLabel
        value={subscribeCheckBox}
        changeValue={setSubscribeCheckBox}>
        Subscribe for select product updates
      </CheckBoxWithLabel>

      <TochOP1 BackColor="gray" 
      disabled={(email.length > 2 && name.length > 2 && pswrd.length >= 8 && termsCheckBox == true  && validation(pswrd)) ? false : true} onPress={() => addUserToFirestore()}>
        <Texto size={'18px'} color={'white'} FW={'bold'}>
          Sign Up
        </Texto>
      </TochOP1>

      <Texto color={'#747474'} align={'center'}>
        or
      </Texto>

        <GoogleBtn>
          <GoogleSigninButton
            style={{ width: 192, height: 48 }}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={()=>SignInWithGoogle}
          />;
        </GoogleBtn>

      <Texto align={'center'} color={'gray'}>
        Alredy have an account?
        <Texto color={'#5974f5'} onPress={() => navigation.navigate('Login')}>
          Log In
        </Texto>
      </Texto>
    </Container>
  );
};
