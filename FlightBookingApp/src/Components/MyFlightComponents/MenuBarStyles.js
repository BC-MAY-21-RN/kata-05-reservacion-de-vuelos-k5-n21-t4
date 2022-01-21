import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    header:{
        position: 'relative',
        fontSize: 30,
        fontWeight: '900',
        color: '#5C6EF8',
        paddingLeft: 0,
    },
    container:{
        //position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0, 
        paddingLeft: 0,
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
        paddingLeft: 10,
        zIndex: 1,
    },    
})