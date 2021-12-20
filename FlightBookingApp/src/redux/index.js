// import { createStore } from 'redux';
const createStore = require('redux').createStore

//ACTIONS - "CUALQUIER ACCION QUE AFECTE A LA STORE"
const DELETE_USER = 'DELETE_USER'
const NEW_USER = 'NEW_USER'

const delete_user_action = (cant) => {
    return{
        type: DELETE_USER,
        payload: cant
    }
}
const new_user_action = (cant) => {
    return{
        type: NEW_USER,
        payload: cant
    }
}

//REDUCERS - "TRANAJADORES QUE ORDENAN LA INFORMACIÓN DENTRO DEL ALMACENAMIENTO"
const default_users_state = {
    users: 10
}

const users_reducer = (state = default_users_state, action) =>{
    switch(action.type){
        case DELETE_USER: {
            return {
                users: state.users - action.payload
            }
        }
        case NEW_USER: {
            return {
                users: state.users + action.payload
            }
        }
        default: return state
    }
}

//STORE - ALMACENAMIENTO
const store = createStore(users_reducer) //Crea la store

console.log('Estado incial:', store.getState()) //obtiene el esato inicial (10 usuarios)

store.subscribe(()=>{//Se subscribe al almacenamiento para poder así trabajar con lo que este incluye y que tome en cuenta las acciones.
    console.log('Cambio de estado: ', store.getState())
})

store.dispatch(delete_user_action(3))//Envia un mensaje de "action"
store.dispatch(new_user_action(3))//Envia un mensaje de "action"