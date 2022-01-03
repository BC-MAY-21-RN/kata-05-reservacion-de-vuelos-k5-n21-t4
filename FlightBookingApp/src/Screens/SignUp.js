import React, {useState} from 'react';
import {Container, Texto, TochOP} from '../Assets/styled';
import {PswrdInput, Input} from '../Components/InputLog';
import CheckBoxWithLabel from '../Components/Checkbox';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const SignUp = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [pswrd, setPswrd] = useState('');
  const [termsCheckBox, setTermsCheckBox] = useState('');
  const [subscribeCheckBox, setSubscribeCheckBox] = useState('');

  const addUserToFirestore = () => {

    //Creacion del usuario en la firebase
    auth().createUserWithEmailAndPassword(email, pswrd)
    .then((e)=>{// e recupera lo que es la información
      console.log("User created on auth database in firebase")

      //Creación del usuario en la firestore
      firestore()
      .collection('Users')
      .doc(e.user.uid)//Usa el id que se crea en createuserwithEmailand password
      .set({
        email: email,
        flights: ['1'],
        name: name,
        password: pswrd,
      })
      .then(() => {
        console.log(
          'User registration succesful'
        );
      });
    })
    .catch(e=>{
      console.log("Error"+e)
    })
  };

  return (
    <Container>
      <Texto size={'16px'}>First Name</Texto>
      <Input placeholder="Name" value={setName} />

      <Texto size={'16px'}>Email *</Texto>
      <Input placeholder="Email" value={setEmail} />

      <Texto size={'16px'}>Password *</Texto>
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

      <TochOP onPress={() => addUserToFirestore()}>
        <Texto size={'18px'} color={'white'} FW={'bold'}>
          Sign Up
        </Texto>
      </TochOP>

      <Texto color={'#747474'} align={'center'}>
        or
      </Texto>

      <TochOP>
        <Texto size={'18px'} color={'white'} FW={'bold'}>
          Sign Up with Google
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
