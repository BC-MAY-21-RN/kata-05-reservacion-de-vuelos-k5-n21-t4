import { ToastAndroid } from 'react-native'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import { GoogleSignin } from '@react-native-google-signin/google-signin'

GoogleSignin.configure({
  webClientId: '43375129789-19d3mo4bim7cgmt6d7co7lr44doerqti.apps.googleusercontent.com'
});

export const loginAuth = async (navigation, email, pwd) =>{
    try{
      await auth().signInWithEmailAndPassword(email, pwd)
      .then((res)=>{
        navigation.navigate("My Flights", res.user.uid)
      })
      .catch((e)=>{
        console.log(e.code)

        switch(e.code){
          case 'auth/wrong-password': 
            ToastAndroid.show("Invalid Password", 3)
            break;
          case 'auth/invalid-email':  
            ToastAndroid.show("Invalid Email", 3)
            break;
          case 'auth/too-many-requests':  
            ToastAndroid.show("Please wait 5 seconds before press the button again", 5)
            break;
        }
      })
    }
    catch (e){
      console.log(e)
    }
}

export const SignInWithGoogle = async (navigation) => {
  // console.log('Hola')
  // GoogleSignin.signOut()
  let infoUser = ""
  // Get the users ID token
  
  const { idToken } = await GoogleSignin.signIn();
  // Create a Google credential with the token
  
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  // Sign-in the user with the credential
  
  await auth().signInWithCredential(googleCredential).then((resp)=>{
    infoUser = resp.user.uid
  });
  navigation.navigate('My Flights', infoUser)
}