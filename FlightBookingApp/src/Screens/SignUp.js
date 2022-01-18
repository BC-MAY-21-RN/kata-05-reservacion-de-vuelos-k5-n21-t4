import React, { useEffect, useState} from 'react';
import {Container, Texto, TochOP, TochOP1, TextAlert, GoogleBtn} from '../Assets/styled';
import {PswrdInput, Input} from '../Components/InputLog';
import CheckBoxWithLabel from '../Components/Checkbox';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin'
import validation from '../Components/SingUpVal';
import { SignInWithGoogle, addUserToFirestore } from '../utils/firebase/FirebaseFunctions.js';

export const SignUp = ({navigation}) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [pswrd, setPswrd] = useState('');
  const [termsCheckBox, setTermsCheckBox] = useState('');
  const [subscribeCheckBox, setSubscribeCheckBox] = useState('');
  const [info_user, setInfoUser] = useState({});
  const [textWarning, setTxtWarn] = useState('');
  const [textWarning2, setTxtWarn2] = useState('');

  return (
    <Container>
      <Texto size={'16px'}>First Name</Texto>
      <Input placeholder="Name" value={setName} />

      <Texto size={'16px'}>Email * {textWarning != '' ? <TextAlert>{textWarning}</TextAlert> : ''}</Texto>
      <Input placeholder="Email" value={setEmail} />

      <Texto size={'16px'}>Password *{textWarning2 != '' ? <TextAlert>{textWarning2}</TextAlert> : ''} </Texto>
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
      disabled={(email.length > 2 && name.length > 2  && termsCheckBox == true && pswrd.length > 0) ? false : true} onPress={() => addUserToFirestore(navigation, email, name, pswrd,setTxtWarn, setTxtWarn2 )}>
        <Texto size={'18px'} color={'white'} FW={'bold'}>
          Sign Up
        </Texto>
      </TochOP1>

      <Texto color={'#747474'} align={'center'}>
        or
      </Texto>

      <TochOP
        actOpa={0.8}
        onPress={()=>SignInWithGoogle(navigation)}
        bcolor={'#5C6EF8'}>
        <Texto size={'18px'} color={'white'} FW={'bold'}>
          🇬 Sign in with Google
        </Texto>
      </TochOP>


      <Texto align={'center'} color={'gray'}>
        Alredy have an account?
        <Texto color={'#5974f5'} onPress={() => navigation.navigate('Login')}>
          Log In
        </Texto>
      </Texto>
    </Container>
  );
};