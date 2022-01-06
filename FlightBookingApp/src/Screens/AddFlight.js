import React from 'react'
import {NavigationContainer } from '@react-navigation/native'
import {Provider as PaperProvider} from 'react-native-paper'
import { FormProvider } from './AddFlightFormScreens/AFFormContext'
import {AddFlightNavigator as Navigator} from '../Components/AddFlightNavigator'

//replace the  things on top with the actual files

//i stopped at 50% on the multi screen form tut

export const AddFlight = () => {
    return (
<<<<<<< HEAD
        <View>
            <Text onPress={() => navigation.navigate('Origen')}> yeh</Text>
        </View>
=======
        <PaperProvider>
            <FormProvider>
                <NavigationContainer>
                    <Navigator />
                </NavigationContainer>
            </FormProvider>
        </PaperProvider>
>>>>>>> eed5d1b (Multiscreen form setup)
    )
};