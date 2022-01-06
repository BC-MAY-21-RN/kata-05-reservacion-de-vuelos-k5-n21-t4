import React, {useState} from 'react';
import {PswrdInput, Input} from '../Components/InputLog';
import {Container, Texto, TochOP} from '../Assets/styled';
import {auth} from 'firebase';

export const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [pswrd, setPswrd] = useState('');
  const [focus, setFocusState] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <Container>
      <Texto size={'16px'}>Email *:</Texto>
      <Input placeholder="Email" />

      <Texto size={'16px'}>Password *:</Texto>
      <PswrdInput
        keyboardType={null}
        placeholder="Contraseña"
        secureTextEntry={hidePassword}
        onPress={() => setHidePassword(!hidePassword)}
        value={pswrd}
        onChangeText={pswrd => setPswrd(pswrd)}
      />

      <TochOP>
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
        Don't have an account?_
        <Texto
          color={'#5974f5'}
          onPress={() => navigation.navigate('SignUp')}
          style={{color: '#5974f5'}}>
        Sign Up
        </Texto>
      </Texto>

        <Texto
          color={'#5974f5'}
          onPress={() => navigation.navigate('My Flights')}
          style={{color: '#5974f5'}}>
          Pantalla mis vuelos 
        </Texto>
        <Texto
          color={'#5974f5'}
          onPress={() => navigation.navigate('Add Flight')}
          style={{color: '#5974f5'}}>
          Pantalla añadir vuelo 
        </Texto>
      
    </Container>
  );
};