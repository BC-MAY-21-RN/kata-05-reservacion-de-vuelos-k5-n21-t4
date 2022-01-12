import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  background-color: white;
  width: 100%;
  margin-bottom: 3%;
  `;
export const Container2 = styled.View`
  flex: 1; 
  background-color: white;
`;
export const Cont = styled.View` 
  flex-direction: row;
  width: 100%;
  height: ${(props)=> props.height ||'35px'};
  justify-content: space-between;
  background-color: white;
  margin-bottom: 5px;
  margin-top: ${(props)=> props.marginT ||'0px'};
  `;
export const Linea = styled.View`
  width: 100%;
  height: ${(props)=> props.height ||'1px'};
  background-color: ${(props)=> props.BackColor ||'black'};
`;
export const Pais = styled.Text`
  font-weight: 800;
  color: black;
  font-size: 28px;
  `;
export const Ciudad = styled.Text`  
  font-weight: 600;
  font-size: 15px;
  color:#b6b7ba;
`;
export const MoreInfo = styled.Text`
  font-weight: 500;
  color: black;
  font-size: 15px;
`;

//temporal fix
export const TempIcon = styled.Text`
position: relative;
font-weight: bold;
color: #5974f5;
font-size: 32px;
transform: translateY(10px)
`;
export const FlList = styled.FlatList `
  padding: 5%;
`;