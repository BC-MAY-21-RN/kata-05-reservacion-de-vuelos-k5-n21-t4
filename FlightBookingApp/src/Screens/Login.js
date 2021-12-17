import React, { useState } from 'react'
import { SafeAreaView, Text, TextInput, ToastAndroid, Button, TouchableOpacity } from 'react-native'
import {auth} from '../firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export const Login = () => {

    
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const SignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((re)=>{
            console.log(re);
        })
        .catch((re)=>{
            console.log(re);
        })
    }


    return (
        <SafeAreaView>

            <TextInput                 
                onChangeText={nam => setName(nam)}
                placeholder="name"
                value={name}
            />

        <TextInput                 
                onChangeText={correo => setEmail(correo)}
                placeholder="name"
                value={email}
            />
        
        <TextInput                 
                onChangeText={pwd => setPassword(pwd)}
                placeholder="password"
                secureTextEntry={true}
                value={password}
            />

        <Button
            title="Sign up"
            onPress={SignUp}
        />
        </SafeAreaView>
    )
}
