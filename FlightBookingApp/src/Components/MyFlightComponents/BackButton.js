import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'

{/**a more general use icon component  would have a prop for choosing the icon type */}


export const BackButton = (props) => {
    
    const { navigation } = props
    //const { route: { params: infoUser } } = props
    
    console.log(navigation);
    
    const stepBack = (screen) =>{
        navigation.navigate(screen)
    }

    return (
        <TouchableOpacity style={styles.headerBar} onPress={() => stepBack('My Flights')}>
            <Icon
                name='chevron-back-outline'
                type='ionicon'
                color='#5C6EF8'
                size={35}
            />
        </TouchableOpacity>
    )

}
const styles = StyleSheet.create({
    headerBar:{
        position: 'absolute',
        marginLeft: '0%',
        top: '0%',
        padding: 15,
    },
})