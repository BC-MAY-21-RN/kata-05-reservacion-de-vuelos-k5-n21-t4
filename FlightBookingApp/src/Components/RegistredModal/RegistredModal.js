import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Modal, ActivityIndicator } from 'react-native';
import { Texto } from '../../Assets/styled';
import { styles } from './styles';
import { Icon } from 'react-native-elements';

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
  const [item, setItem] = useState(<ActivityIndicator size="large" color="#5C6EF8"/>)

  useEffect(()=>{
    setState(RequestText)
    switch(RequestText){
      case 'Signed Up':
        setItem(<Icon name='checkmark-circle-outline' type='ionicon' color='#5C6EF8' size={30} />)
        break;
      case 'Error':
        setItem(<Icon name='close-outline' type='ionicon' color='#5C6EF8' size={30} />)
        break;
      case 'Signing Up...':
        setItem(<ActivityIndicator size="large" color="#5C6EF8"/>)
        break;
    }
  }, [RequestText]) 
  
  return (
    <View style={styles.container}>
      <ModalPopup visible={visible}>
        <View style={{alignItems: 'center'}}>
          {item}
          <Texto color={'#5974f5'}>{state}</Texto>
        </View>
      </ModalPopup>
    </View>
  );
};

export const waitFor = ms => new Promise(
  resolve => setTimeout(resolve, ms)
)