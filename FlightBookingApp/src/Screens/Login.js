import React, {useEffect, useState} from 'react';
import {PswrdInput, Input} from '../Components/InputLog';
import {Container, Texto, TochOP} from '../Assets/styled';
import {loginAuth,  SignInWithGoogle} from '../utils/firebase/FirebaseFunctions';
import { GoogleBtn } from '../Components/GoogleBtn';
import { MenuBar } from '../Components/MyFlightComponents/MenuBar';
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

  return (
    <Container>
      <MenuBar backTo={""} navigation={navigation} type={"Header"} header={"Login"}/>
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
        actOpa={ 0.8}
        bcolor={validation.bcolor}>
        <Texto size={'18px'} color={'white'} FW={'bold'}>
          Login
        </Texto>
      </TochOP>
      
      <GoogleBtn />

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
          {`\n`}Book flight
        </Texto>
      </Texto>
    </Container>
  );
};
