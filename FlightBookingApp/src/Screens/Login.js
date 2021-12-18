import React from 'react'
import { SafeAreaView, Text, TextInput, ToastAndroid } from 'react-native'
import { auth } from 'firebase'
import './index' //imports styles

const Login = () => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [focus, setFocusState] = useState(false)

    const SignUp = (e) => {
        try {
            auth.createUserWithEmailAndPassword(email, password)
            ToastAndroid.show("registro exitoso", ToastAndroid.SHORT)
        } catch (e) {
            console.log(e)
            ToastAndroid.show("falla en el registro: " + e, ToastAndroid.SHORT)
        }
    }

    const handleFocus = () => {
        setFocusState(true)
    }
        

    return (
        <SafeAreaView>
            <TextInput               
                onFocus={hanfleFocus}
                onChangeText={() => setName(e).target.value}
                placeholder="name"
                placeholderTextColor={"black"}
                value={name}
            />

        <TextInput                 
                onChangeText={() => setEmail(e).target.value}
                placeholder="name"
                value={email}
            />
        
        <TextInput                 
                onChangeText={() => ssetPassword(e).target.value}
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

export default Login
