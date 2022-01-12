import {firebase} from '@react-native-firebase/firestore';

export async function getFlightsList(vuelos) {
  var info = [];

  for (let i = 0; i < vuelos.length; i++) {
    var infoVuelos = await firebase
      .firestore()
      .collection('Flights')
      .doc(vuelos[i])
      .get();
    info.push({...infoVuelos.data(), key: i});
  }
  return info;
}
