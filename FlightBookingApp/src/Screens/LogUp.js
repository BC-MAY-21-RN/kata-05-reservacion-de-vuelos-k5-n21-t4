import React from 'react';
import {Conteiner,TextButton, TO, InputLog, PrimeTitle, SecondTitle, InfoText} from '../Assets/styled';
import {Button, Text} from 'react-native';

export const LogUp = () => {
    return (  
        <Conteiner>
            <PrimeTitle>Sign Up</PrimeTitle>
                
            <SecondTitle>First Name</SecondTitle>
            <InputLog></InputLog>
            
            <SecondTitle>Email *</SecondTitle>
            <InputLog></InputLog>
                  
            <SecondTitle>Password*</SecondTitle>
            <InputLog></InputLog>

            <InfoText>I agree to the Terms and Privacy Policy</InfoText>

        <TO>
           <TextButton>Sign Up</TextButton>
                
        </TO>
            
            <InfoText> or </InfoText>
            
        <TO>
        <TextButton>Sign Up with Google</TextButton> 
              
                
        </TO>
        <InfoText></InfoText>
        </Conteiner>
    );
  };