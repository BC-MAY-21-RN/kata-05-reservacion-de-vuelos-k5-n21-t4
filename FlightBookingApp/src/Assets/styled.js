import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  flex: 1;
  padding: 6%;
  background-color: white;
  `;
//Estilo botones
export const TochOP = styled.TouchableOpacity.attrs(props => ({activeOpacity: props.actOpa || 1,}))`
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.BackColor || props.bcolor};
  margin: 2% 0% 2% 0%;
  padding: 3px;
  font-weight: bold;
  `;

  export const TochOP1 = styled.TouchableOpacity.attrs(props => ({
    activeOpacity: props.actOpa || 1,
  }))
    `
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    width: 100%;
    height: 8%;
    background-color: ${(props) => props.disabled ? 'gray' : '#5b6df7'};
    margin: 2% 0% 2% 0%;
    padding: 3px;
    font-weight: bold;
    `;

export const Plus = styled.View`
  position: absolute;   
  align-self: center;
  border-radius: 100px;
  width: 80px;
  height: 80px;
  background-color:#5974f5;
  font-weight: bold;
  bottom: 15px;
`;


//Textos

export const Texto = styled.Text`
text-align: ${(props) => props.align || 'left'};
font-size: ${(props) => props.size || '14px'};
color: ${(props) => props.color || '#4f4f4f'};
margin: ${(props) => props.MP || '0%'};
font-weight: ${(props) => props.FW || 'normal'};
`;

//estilos Checbox
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
//Input pswrd
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
  height: 53px;
  width: 100%;
  margin-top: 1%;
  margin-bottom: 4%;
  justify-content: space-between;
  border: 1px;
  border-color: ${(props) => props.BColor || '#4f4f4f'};
  `;

// Inputs normales
export const InputLog = styled.TextInput`
  padding-left: 10px;
  font-weight: bold;
  height: 55px;
  width: 100%;
  margin: 1% 0% 4% 0% ;
  border: 1px; 
  border-color: ${(props) => props.BColor || '#4f4f4f'};
  `;

export const InpL = styled.TextInput`
  flex-direction: row;
  text-align: left;
  color: black;
  font-weight: bold;
  padding: 0;
  padding-left: 3px;
  `;

export const GoogleBtn = styled.Text`
  text-align: center;
`;

export const TextAlert = styled.Text`
  font-size: 14px;
  color: red;
`;