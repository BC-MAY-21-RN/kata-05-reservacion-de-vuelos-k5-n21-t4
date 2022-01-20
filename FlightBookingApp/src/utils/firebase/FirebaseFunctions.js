import {ToastAndroid} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import validation from '../../Components/SingUpVal';
import FlightData from '../../Components/MyFlightComponents/Origen';
import { waitFor } from '../../Components/RegistredModal/RegistredModal';

export const loginAuth = async (navigation, email, pwd) => {
  try {
    await auth()
      .signInWithEmailAndPassword(email, pwd)
      .then(res => {
        navigation.navigate('My Flights', res.user.uid);
        FlightData.userId = res.user.uid;
      })
      .catch(e => {
        switch (e.code) {
          case 'auth/invalid-email':
            ToastAndroid.show('Invalid Email', 3);
            break;
          case 'auth/user-disabled':
            ToastAndroid.show('This user is disabled', 3);
            break;
          case 'auth/wrong-password':
            ToastAndroid.show('Invalid Password', 3);
            break;
          case 'auth/user-not-found':
            ToastAndroid.show("This user doesn't exists", 3);
            break;
          case 'auth/too-many-requests':
            ToastAndroid.show(
              'Please wait 5 seconds before press the button again',
              5,
            );
            break;
        }
      });
  } catch (e) {
    console.log(e);
  }
};

export const addUserToFirestore = async (
  navigation,
  email,
  name,
  pwd,
  setTxtWarn,
  setTxtWarn2,
  setVisible,
  setRequestText
  ) => {
    let infoUser = '';
    console.log(pwd.length)
    if (pwd.length >= 8 && validation(pwd)) {
      setVisible(true)
      setRequestText('Signing Up...')
      await waitFor(2000)
      setTxtWarn2('');
      auth()
      .createUserWithEmailAndPassword(email, pwd)
      .then((e) => {
        firestore()
        .collection('Users')
        .doc(e.user.uid)
        .set({
          email: email,
          flights: [],
          name: name,
          password: pwd,
        })
        .then(async () => {
          infoUser = e.user.uid;
          setRequestText('Signed Up')
          await waitFor(2000)
          setVisible(false)
          navigation.navigate('My Flights', infoUser);
        });
      })
      .catch(async (e) => {
        setRequestText('Error')
        await waitFor(2000)
        setVisible(false)

        switch (e.code) {
          case 'auth/email-already-in-use':
            setTxtWarn('Este correo ya está en uso.');
            break;
          case 'auth/invalid-email':
            setTxtWarn('Correo en formato invalido.');
            break;
          case 'auth/operation-not-allowed':
            setTxtWarn('Correo electrónico/contraseña no están habilitadas.');
            break;
          case 'auth/weak-password':
            setTxtWarn('La contraseña no es lo suficientemente fuerte');
            break;

          default:
            console.log('This is another error: ' + e.code);
            break;
        }
      });
    } else {
      console.log(validation(pwd))
      setTxtWarn2(
        validation(pwd) ?  'Contraseña menor a 8 caracteres' : 'Formato invlaido' 
      );
    }
};

export const SignInWithGoogle = async navigation => {
  GoogleSignin.configure({
    webClientId:
      '43375129789-19d3mo4bim7cgmt6d7co7lr44doerqti.apps.googleusercontent.com',
  });
  let infoUser = '';
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  await auth()
    .signInWithCredential(googleCredential)
    .then(resp => {
      infoUser = resp.user.uid;
    });
  navigation.navigate('My Flights', infoUser);
};
