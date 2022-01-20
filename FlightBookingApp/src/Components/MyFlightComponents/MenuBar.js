import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import auth from '@react-native-firebase/auth'
import { styles } from './MenuBarStyles'

{/**a more general use icon component  would have a prop for choosing the icon type */}


export const MenuBar = (props) => {
    
    const stepBack = (screen, clearField = "") =>{
        if (clearField != "") {
            //unsetObjectValue(clearField)
        }
        props.navigation.navigate(screen)
        console.log(screen);
    }

    const unsetObjectValue = (ObjectField) =>{
        setSelectedValue("")
        FlightData.ObjectField = ""
    }

    const logOut = () => {
        auth().signOut().then(function() {
            console.log('Signed Out');
            stepBack('Login')
        }, function(error) {
            console.error('Sign Out Error', error);
        });
    }

    const showButton = () => {
        switch (props.type) {
            case 'Header':
                return(
                    <>
                        <Text style={styles.header}>{props.header}</Text>
                        <View></View>
                    </> 
                )
            case 'Back':
                return(
                    <>
                        <TouchableOpacity onPress={() => stepBack(props.backTo, props.clearField)}>
                            <Icon
                                name='chevron-back-outline'
                                type='ionicon'
                                color='#5C6EF8'
                                size={30}
                            />
                        </TouchableOpacity>
                    </>
                )
            case 'SignOut':
                return(
                    <>
                        <Text style={styles.header}>My Flights</Text>
                        <TouchableOpacity onPress={() => logOut()}>
                            <Icon
                                name='exit-outline'
                                type='ionicon'
                                color='#5C6EF8'
                                size={30}
                            />
                        </TouchableOpacity>
                    </>
                )
            default:
                break;
        }
    }

    return (
        <View style={(props.type == 'SignOut' || props.type == 'Header') ? (styles.container) : (styles.containerForm)}>
            <View style={styles.menuBar}>
            {showButton()}
        </View>
        </View>
    )

}