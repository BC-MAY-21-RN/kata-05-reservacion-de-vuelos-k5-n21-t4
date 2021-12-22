import React, {useState} from 'react';
import {Text} from 'react-native';
import {
  Container,
  TextButton,
  TochOP,
  SecondTitle,
  InfoText,
  Required,
} from '../Assets/styled';
import {PswrdInput, UserInput, NameInput} from '../Components/InputLog';
import CheckBoxWithLabel from '../Components/Checkbox';

/*import firestore from '@react-native-firebase/firestore';
const usersCollection = firestore().collection('Users')*/

export const SignUp = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [pswrd, setPswrd] = useState('');
  const [termsCheckBox, setTermsCheckBox] = useState('');
  const [subscribeCheckBox, setSubscribeCheckBox] = useState('');

/*

  const addUserToFirestore = () => {
    firestore().collection('usuarios').add({
      email: '',
      name: '',
      password: '',
    }).then(() => {console.log('User registration succesful')})    
  }
*/
  
  return (
    <Container>
      <SecondTitle>First Name</SecondTitle>
      <NameInput placeholder="First Name" />

      <SecondTitle>Email *</SecondTitle>
      <UserInput placeholder="Email" />

      <SecondTitle>Password *</SecondTitle>
      <PswrdInput
        keyboardType={null}
        placeholder="Contraseña"
        secureTextEntry={hidePassword}
        onPress={() => setHidePassword(!hidePassword)}
        value={pswrd}
        onChangeText={pswrd => setPswrd(pswrd)}
      />

      <Required>
        Use 8 or more characters with a mix of text letters, numbers, and
        symbols
      </Required>
      
      <CheckBoxWithLabel value={termsCheckBox} changeValue={setTermsCheckBox}>
        I agree to the Terms and Privacy policy.
      </CheckBoxWithLabel>
      
      <CheckBoxWithLabel value={subscribeCheckBox} changeValue={setSubscribeCheckBox}>
        Subscribe for select product updates
      </CheckBoxWithLabel>

      <TochOP>
        <TextButton>Sign Up</TextButton>
      </TochOP>

      <InfoText> or </InfoText>

      <TochOP>
        <TextButton>Sign Up with Google</TextButton>
      </TochOP>
      <InfoText>
        Alredy have an account?
        <Text
          onPress={() => navigation.navigate('Login')}
          style={{color: '#5974f5'}}>
          {' '}
          Log In
        </Text>
      </InfoText>
    </Container>
  );
};
