import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Modal } from 'react-native';

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

export const RegistredModal = (visible) => {
  return (
    <View style={styles.container}>
      <ModalPopup visible={visible}>
        <View style={{alignItems: 'center'}}>
          <Text>Hello World</Text>
        </View>
      </ModalPopup>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ModalBackground:{
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ModalContainer:{
    width: '30%',
    backgroundColor: '#232323',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 5,
    elevation: 20,
  },
  header:{
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center'
  }
})