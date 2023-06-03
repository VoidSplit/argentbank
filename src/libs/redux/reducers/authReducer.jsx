import { CHANGE_TOKEN, SET_USER_NAME, CHANGE_REMEMBER, LOG_OUT } from '../actions/authActions';

const initialState = {
    userIsLogged: false,
    firstName: '',
    lastName: '',
    rememberMeChecked: false,
    token: null,
    error: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_TOKEN:
            return {
                ...state,
                userIsLogged: true,
                token: action.payload.token,
            }
        case SET_USER_NAME:
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName
            }
        case CHANGE_REMEMBER:
            return {
                ...state,
                rememberMeChecked: action.payload.remember
            }
        case LOG_OUT:
            return {
                ...state,
                userIsLogged: false,
                firstName: '',
                lastName: '',
                rememberMeChecked: false,
                token: null,
                error: null
            }
        default:
            return state;
    }
};

export default authReducer;