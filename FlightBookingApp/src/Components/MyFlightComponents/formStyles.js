import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    screen:{
        backgroundColor: 'white',
        height: '100%',
        padding: 20,
        paddingTop: 0,
        flex: 1,
        justifyContent: 'center',
    },
    centerMainContent:{
        marginBottom: 220,
    },
    centerCalendarContent:{
        marginBottom: 100,
    },
    header:{
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 90,
    },
    lowerHeader:{
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 5,
    },
    button:{
        position: 'absolute',
        alignSelf: 'center',
        alignItems: 'center',
        bottom: 60,
        padding: 12,
        borderRadius: 15,
        flex: 1,
        width: '100%',
        backgroundColor: '#5C6EF8',
        //shadow
        shadowColor: "#5C6EF8",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 1,
        shadowRadius: 10.00,
        elevation: 20,
    },
    buttonDisabled:{
        position: 'absolute',
        alignSelf: 'center',
        alignItems: 'center',
        bottom: 60,
        padding: 12,
        borderRadius: 15,
        flex: 1,
        width: '100%',
        backgroundColor: 'grey',
    },
    centerText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    input:{
        borderWidth: 1,
        borderColor: 'white',
        borderBottomColor: '#5C6EF8',
    },
    inputPicker:{
        borderWidth: 1,
        borderColor: 'white',
        borderBottomColor: '#5C6EF8',
    },
    inputDisabled:{
        borderWidth: 1,
        borderColor: 'white',
        borderBottomColor: 'grey',
    }
  });