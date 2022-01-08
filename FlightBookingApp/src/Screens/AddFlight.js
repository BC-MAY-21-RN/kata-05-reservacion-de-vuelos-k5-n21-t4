import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-native-paper';
import { Origin1 } from './AddFlightFormScreens/Origin1';
import { FormProvider } from './AddFlightFormScreens/AFFormContext';
import AddFlightNavigator from '../Components/AddFlightNavigator'

export const AddFlight = ({navigation}) => {
  return (
    // <PaperProvider>
    //   <FormProvider>
    //     <Origin1/>
    //   </FormProvider>
    // </PaperProvider>
    // <Provider>
    //   <FormProvider>
    //     <NavigationContainer>
    //       <AddFlightNavigator />
    //     </NavigationContainer>
    //   </FormProvider>
    // </Provider>
    <NavigationContainer
      independent={true}
    >
          <AddFlightNavigator />
        </NavigationContainer>
  )
};
