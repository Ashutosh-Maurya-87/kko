import {
    SET_LOADER_USER,
    SET_USER_DETAIL,
    SET_SIGNUP_STATUS,
    SET_LOGIN_STATUS,
    SET_TOKEN,
    SET_ROLE,
    IS_USER_LOGGED_IN,
    SET_ADMIN_DETAIL,
    LOGOUT,
} from './userType.types';

const INITIAL_STATE = {
    role: "",
    id: null,
    status: '',
    isLoader: false,
    isUserLoading: false,
    token : '',
    isLoggedIn: false,
    userData: {
        fullName: "",
        firstName: "",
        lastName: "",
        contact: "",
        email: "",
        password: "",
        activationToken: "",
        role: "",
        userID: "",
    }, 
    adminData: {
        fullName: "",
        firstName: "",
        lastName: "",
        contact: "",
        email: "",
        password: "",
        activationToken: "",
        role: "",
        userID: "",
    },
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER_DETAIL:
            return Object.assign({}, state, { 
                ...state, 
                userData: action.value })

        case SET_ADMIN_DETAIL:
            return Object.assign({}, state,{
                ...state,
                adminData: action.value })

        case SET_LOADER_USER:
            return { 
                ...state, 
                isUserLoading: action.value }

        case SET_SIGNUP_STATUS:
            return { ...state, status: action.value }

        case SET_LOGIN_STATUS:
            return { ...state, status: action.value }

        case SET_TOKEN:
            return { ...state, token: action.value }

        case SET_ROLE:
            return { ...state, role:action.value }

        case IS_USER_LOGGED_IN:
                return { ...state, isLoggedIn:action.value }

        case LOGOUT :
            return { state: INITIAL_STATE, logout: action.value}
        default:
            return state
    }
}

export default userReducer;