import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
  },
  Image: {
      width: 300,
      height: 150
  }
})