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
    header:{
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 90,
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
    inputDisabled:{
        borderWidth: 1,
        borderColor: 'white',
        borderBottomColor: 'grey',
    }
  });