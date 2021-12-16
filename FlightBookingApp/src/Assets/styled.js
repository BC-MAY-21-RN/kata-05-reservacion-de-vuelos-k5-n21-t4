import styled from 'styled-components/native';
import Color from './colors';



export const Conteiner = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding: 4%;
`;

export const TO = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  height: 40px;
  width: 100%;
  background-color: blue ; 
`;

export const InputLog = styled.TextInput`
  text-align: left;
    font-size: 10px;
    color: black;
  `;

export const PrimeTitle = styled.Text`
    text-align: left;
    font-size: 30px;
    color: blue;
    
`;

export const TextButton = styled.Text`
    text-align: left;
    font-size: 16px;
    font-weight: bold;
    color: white;
    
`;

export const SecondTitle = styled.Text`
    text-align: left; 
    font-size: 20px;
    color: black;
`;

export const InfoText = styled.Text`
    text-align: left;
    font-size: 10px;
    color: gray;
`;
