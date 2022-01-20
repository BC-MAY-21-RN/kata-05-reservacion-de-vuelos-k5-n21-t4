import React from 'react'
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import auth from '@react-native-firebase/auth';

{/**a more general use icon component  would have a prop for choosing the icon type */}


export const MenuBar = (props) => {
    
    //const { navigation } = props
    //const { route: { params: infoUser } } = props
    //console.log(navigation);
    
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
const styles = StyleSheet.create({
    header:{
        position: 'relative',
        fontSize: 30,
        fontWeight: '900',
        color: '#5C6EF8',
    },
    container:{
        //position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0, 
        paddingLeft: 10,
        paddingRight: 10,
    },
    containerForm:{
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0, 
        padding: 10,
    },
    menuBar:{
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        paddingLeft: 0,
        zIndex: 1,
    },    
})