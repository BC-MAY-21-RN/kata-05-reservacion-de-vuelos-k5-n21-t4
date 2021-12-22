import styled from 'styled-components/native';
import CheckBox from '@react-native-community/checkbox';



export const Container = styled.View`
  flex-direction: column;
  flex: 1;
  padding: 6%;
  `;

export const TochOP = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  width: 100%;
  background-color: #b6b7ba;
  margin-top: 2%;
  margin-bottom: 2%;
  padding: 3px;
  `;

export const InputLog = styled.TextInput`
  padding: 0px;
  text-align: left;
  color: black;
  font-weight: bold;
  padding: 2px;
  padding-left: 3px;
  `;

export const ActiveInput = styled.TextInput`
  border: 1px solid blue;
  `;

export const PrimeTitle = styled.Text`
  text-align: left;
  font-size: 24px;
  font-weight: bold;
  color: #5974f5;
  margin: 20px;
  margin-left: 0;
  margin-right: 0;
  `;

export const TextButton = styled.Text`
  font-size: 18px;
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
  font-size: 14px;
  color: #747474;
  `;

export const Required = styled.Text`
  text-align: left;
  font-size: 13px;
  color: gray;
  margin-top: -3% ;
  `;

export const CBoxCon = styled.View`
  flex-direction: row;
  margin-top: 3px;
  align-items: center;
  `;

export const CheckText = styled.Text`
  text-align: left;
  font-size: 13px;
  color: gray;
  `;

export const Image = styled.Image`
  height: 20px;
  width: 20px;
  `;

export const InpCon = styled.View`
  padding: 0px;
  padding-right: 15px;
  flex-direction: row;
  align-items: center;
  text-align: left;
  font-weight: bold;
  height: 9%;
  width: 100%;
  margin-top: 1%;
  margin-bottom: 4%;
  justify-content: space-between;
  border: 1px solid #4f4f4f;
  `;

export const InpL = styled.TextInput`
  flex-direction: row;
  text-align: left;
  color: black;
  font-weight: bold;
  padding: 0;
  padding-left: 3px;
  `;

  export const ChBox = styled(CheckBox)`
    
  `;