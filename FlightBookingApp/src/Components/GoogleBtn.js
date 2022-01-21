import React from 'react';
import {Texto, TochOP} from '../Assets/styled';
import { SignInWithGoogle } from '../utils/firebase/FirebaseFunctions.js';

export const GoogleBtn = () =>{
    return(
      <TochOP
        actOpa={0.8}
        onPress={()=>SignInWithGoogle(navigation)}
        bcolor={'#5C6EF8'}>
        <Texto size={'18px'} color={'white'} FW={'bold'}>
          🇬 Sign in with Google
        </Texto>
      </TochOP>
    )
}