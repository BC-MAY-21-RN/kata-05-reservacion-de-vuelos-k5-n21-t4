import React, {useState} from "react";
import { TextInput, View, Image, StyleSheet, Button } from 'react-native'
import Icon from 'react-native-vector-icons/react-native-vector-icons'


export default function MyTextInput(){
  const [hidePassword, setHidePassword] = useState(true);
  
  return(
      <View>
        <TextInput 
          secureTextEntry = {hidePassword} 
        ></TextInput>
        <Button onPress = {()=>securePasw()}>
        <Image style={ styles.btnImage} source = { (setHidePassword) ? require('../Img/ver.png') : require('../Img/ojo.png')}/>
        </Button>
      </View>
    )
}
function securePasw() {
    setHidePassword = false;
}
/*
//onFocus enviar un promp
export default function MyTextInput(props){
  return (
      <Input
        style={{alignItems: 'center'}}
        containerStyle={{marginBottom:20}}
        inputStyle={{ fontSize:18,paddingVertical: 10,
            paddingHorizontal:8, marginTop:12,
            color: color.PRIMARYCOLOR,}}

        placeholderTextColor={color.LIGHTPRIMARYCOLOR}
        placeholder={props.placeholder}
        
        leftIconContainerStyle={{ marginLeft:0 }}
        leftIcon={<Icon size={24} color={color.PRIMARYCOLOR} 
        type={'font-awesome'} name={props.image}/>}
        rightIcon={props.bolGone?
        <TouchableOpacity activeOpacity = { 0.8 } style={styles.btnVisibility} onPress = {props.onPress}>
        <Image style={ styles.btnImage} tintColor={color.PRIMARYCOLOR} 
        source = { (props.secureTextEntry) ? require('../Img/ver.png') : require('../Img/ojo.png')}/>
        </TouchableOpacity>:
        <Icon size={24} color={color.PRIMARYCOLOR}
        type={'font-awesome'} name={props.imageRight}/>}
        errorStyle={{ color: color.RED }}
        errorMessage={(props.bolError)?props.strError:''}
        editable={props.editable}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        value={props.value}/>
    )
}*/

const styles = StyleSheet.create({  

      btnVisibility:
      {
        height: 40,
        width: 35,
        paddingTop: 8,
        paddingLeft:5,
        paddingRight:5
      },
     
      btnImage:
      {
        resizeMode: 'contain',
        height: '100%',
        width: '100%'
      },
})