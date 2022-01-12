import {firebase} from '@react-native-firebase/firestore';

export async function getFlights(uId) {
  return await firebase
    .firestore()
    .collection('Users')
    .doc(uId)
    .get()
    .then(res  => {
      console.log(res.data().flights)
      //uso los de fecha los de date no por eso, ya vi, olvidalo
      return res.data().flights
        // console.log(documentSnapshot.exists)
        //  async documentSnapshot if (documentSnapshot.exists) {
        //       var collectionData = documentSnapshot.data();
        //       return collectionData.flights;
      }
    );
}
