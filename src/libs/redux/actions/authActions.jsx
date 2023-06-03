export const CHANGE_TOKEN = "CHANGE_TOKEN"
export const SET_USER_NAME = "SET_USER_NAME"
export const CHANGE_REMEMBER = "CHANGE_REMEMBER"
export const LOG_OUT = "LOG_OUT"

export const changeToken = (token) => {
    return {
        type: 'CHANGE_TOKEN',
        payload: {token} 
    }
}
export const setUserName = (firstName, lastName) => {
    return {
        type: 'SET_USER_NAME',
        payload: {firstName,lastName}
    }
}

export const changeRemember = (remember) => {
    return {
        type: 'CHANGE_REMEMBER',
        payload: {remember}
    }
}
  
export const logOut = () => {
    return {
        type: 'LOG_OUT',
        payload: {}
    }
}
  