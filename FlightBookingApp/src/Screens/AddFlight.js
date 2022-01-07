import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {AFFormContext as FormProvider} from './AddFlightFormScreens/AFFormContext';
import {AddFlightNavigator as Navigator} from '../Components/AddFlightNavigator';

export const AddFlight = ({navigation}) => {
  return (
    <PaperProvider>
      <FormProvider>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </FormProvider>
    </PaperProvider>
  );
};
