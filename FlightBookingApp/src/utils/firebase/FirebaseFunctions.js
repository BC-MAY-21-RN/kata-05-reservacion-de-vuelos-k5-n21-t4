import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'

export const loginAuth = async (navigation, email, pwd) =>{
    try{
      await auth().signInWithEmailAndPassword(email, pwd)
      .then((res)=>{
        navigation.navigate("My Flights", getUserdata(res))
      })
      .catch((e)=>{
        console.log(e)
      })
    }
    catch (e){
      console.log(e)
    }
}

export const getUserdata = (props) =>{
    let infoUser = {};
    try{
        return firestore()
        .collection('Users')
        .doc(props.user.uid)
        .get()
        .then(res2=>{
            alert("Welcome "+res2._data.name)
            infoUser = props.user
            return infoUser
        })
    } catch (e){
        console.log('Error: ', e)
    }
}