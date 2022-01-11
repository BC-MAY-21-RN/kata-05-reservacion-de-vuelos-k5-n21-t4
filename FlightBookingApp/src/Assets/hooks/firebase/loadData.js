import {firebase} from '@react-native-firebase/firestore';

export async function getFlights(email) {
  return await firebase
    .firestore()
    .collection('Users')
    .where('email', '==', email)
    .get()
    .then(async documentSnapshot => {
        if (documentSnapshot.docs[0].exists) {
            var collectionData = documentSnapshot.docs[0].data();
            return collectionData.flights;
      }
    });
}
