import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: #b6b7ba;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  
  `;
export const Cont = styled.View`
  background-color: ${(props)=> props.BackColor ||'#b6b7ba'};
  width: 33.3%;
  height: 100%*;
  `;
