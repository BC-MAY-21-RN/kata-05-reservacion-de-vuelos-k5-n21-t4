import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Modal } from 'react-native';
import { Texto } from '../../Assets/styled';
import { styles } from './styles';

const ModalPopup = ({visible, children}) =>{
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    (visible) ? setShowModal(true) : setShowModal(false)
  }

  useEffect(()=>{
    toggleModal()
  }, [visible]) 

  return (
    <Modal transparent visible={showModal}>
      <View style={styles.ModalBackground}>
        <View style={styles.ModalContainer}>
            {children}
        </View>
      </View>
    </Modal>
  );
}

export const RegistredModal = ({visible, RequestText}) => {
  const [state, setState] = useState('')
  const [image, setImage] = useState(null)

  useEffect(()=>{
    console.log(RequestText)
    setState(RequestText)

    switch(RequestText){
      case 'Signed Up':
        break;
      case 'Error':
        break;
    }
  }, [RequestText]) 
  
  return (
    <View style={styles.container}>
      <ModalPopup visible={visible}>
        <View style={{alignItems: 'center'}}>
          <Texto color={'#5974f5'}>{state}</Texto>
        </View>
      </ModalPopup>
    </View>
  );
};

export const waitFor = ms => new Promise(
  resolve => setTimeout(resolve, ms)
)