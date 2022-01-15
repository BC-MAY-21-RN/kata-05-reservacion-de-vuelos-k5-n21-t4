export const SET_USER_ID = 'SET_USER_ID';

export const setUid = uid => dispatch =>{
    dispatch({
        type: SET_USER_ID,
        payload: uid
    })
}