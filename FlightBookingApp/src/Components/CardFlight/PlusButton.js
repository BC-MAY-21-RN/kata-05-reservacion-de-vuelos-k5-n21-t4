import React from 'react'
import { Texto, Plus, } from '../../Assets/styled';

export function PlussButton(){
  
    return(
        <Plus>
          <Texto 
            size={'60px'} 
            color={'white'} 
            align={'center'} 
            MP={'-4% 0% 0% 0%'} 
            >
            +
          </Texto>
        </Plus>
    );
}
