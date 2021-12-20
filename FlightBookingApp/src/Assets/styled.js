import styled from 'styled-components/native';
import CheckBox from '@react-native-community/checkbox';

export const Container = styled.View`
    flex: 1;
    flex-direction: column;
    padding: 6%;
    padding-top: 5%;
    `;

export const TochOP = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: 40px;
  width: 100%;
  background-color: #b6b7ba; 
  margin-top: 4%;
  margin-bottom: 4%;
  `;

export const InputLog = styled.TextInput`
    text-align: left;
    font-size: 15px;
    color: black;
    font-weight: bold;
    border: 1px solid #4f4f4f;
    padding: 10px;
    margin-top: 10px;
    margin-left: 0;
    margin-right: 0;
  `;

export const ActiveInput = styled.TextInput`        
    border: 1px solid blue;
  `;

export const PrimeTitle = styled.Text`
    text-align: left;
    font-size: 30px;
    font-weight: bold;
    color: #5974f5;
    margin: 20px;
    margin-left: 0;
    margin-right: 0;
    
`;

export const TextButton = styled.Text`
    text-align: left;
    font-size: 20px;
    font-weight: bold;
    color: white;
    
`;

export const SecondTitle = styled.Text`
    text-align: left; 
    font-size: 16px;
    color: #4f4f4f;
`;

export const InfoText = styled.Text`
    text-align: center;
    font-size: 17px;
    color: gray;
`;

export const Required = styled.Text`
text-align: left;
font-size: 13px;
color: gray;
`;
export const CBox = styled(CheckBox)`

`;

export const CBoxCon = styled.View`
  flex-direction: row;
  margin-top: 3px ;
  align-items: center;
`;

export const CheckText = styled.Text`
 
text-align: left;
font-size: 13px;
color: gray;
`;

