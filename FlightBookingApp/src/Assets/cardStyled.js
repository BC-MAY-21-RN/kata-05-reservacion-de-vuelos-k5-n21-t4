import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  background-color: white;
  border-color: black;
  width: 100%;
  height: 25%;
  margin: 0% 0% 5% 0%;
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
