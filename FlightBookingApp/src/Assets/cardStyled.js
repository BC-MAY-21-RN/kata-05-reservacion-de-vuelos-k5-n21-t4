import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  background-color: white;
  width: 100%;
  height: 25%;
  margin: 0% 0% 3% 0%;
  `;
  export const Cont = styled.View` 
  flex-direction: row;
  align-items: center;
  padding: 0px 10px 0px 10px; 
  width: 100%;
  height: 33.3%;
  justify-content: space-between;
  background-color: white;
  `;
export const Linea = styled.View`
 width: 100%;
 height: ${(props)=> props.height ||'2px'};
 background-color: ${(props)=> props.BackColor ||'black'};
`;

export const Pais = styled.Text`
  font-weight: 900;
  color: black;
  font-size: 25px;
  `;
  export const Ciudad = styled.Text`
  font-weight: 600;
  font-size: 15px;
  color:#b6b7ba;
  `;
  export const MoreInfo = styled.Text`
  font-weight: bold;
  color: black;
  font-size: 15px;
`;