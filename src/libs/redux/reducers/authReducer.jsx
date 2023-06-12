import { CHANGE_TOKEN, SET_USER_NAME, CHANGE_REMEMBER, LOG_OUT, CHANGE_INFOS } from '../actions/authActions';

const initialState = {
    userIsLogged: false,
    firstName: '',
    lastName: '',
    rememberMeChecked: false,
    email: "",
    password: "",
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
        case CHANGE_INFOS: 
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password
            }
        case SET_USER_NAME:
            return {
                ...state,
                userIsLogged: true,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName
            }
        case CHANGE_REMEMBER:
            return {
                ...state,
                rememberMeChecked: action.payload.remember
            }
        case LOG_OUT:
            if(!{state}.state.rememberMeChecked) return {
                ...state,
                userIsLogged: false,
                firstName: '',
                lastName: '',
                rememberMeChecked: false,
                email: "",
                password: "",
                token: null,
                error: null
            }
            if({state}.state.rememberMeChecked) return {
                ...state,
                userIsLogged: false,
                firstName: '',
                lastName: '',
                rememberMeChecked: true,
                token: null,
                error: null
            }
        default:
            return state;
    }
};

export default authReducer;