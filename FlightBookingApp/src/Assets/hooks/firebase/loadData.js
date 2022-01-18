import {firebase} from '@react-native-firebase/firestore';

export async function getFlights(uId) {
  return await firebase
    .firestore()
    .collection('Users')
    .doc(uId)
    .get()
    .then(res  => {
      console.log(res.data().flights)
      
      return res.data().flights
           return collectionData.flights;
      }
    );
}
