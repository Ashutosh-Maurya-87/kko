import * as api from '../../services/api';
import { deleteCookie, setCookie } from '../../services/cookie';
// import { LOGIN_LOADER, SET_ROLE, SET_USER_TOKEN } from '../admin/admin.types';
import {
    SET_LOADER_USER,
    SET_USER_DETAIL,
    SET_SIGNUP_STATUS,
    SET_LOGIN_STATUS,
    SET_TOKEN, SET_ROLE,
    IS_USER_LOGGED_IN,
    SET_ADMIN_DETAIL,
    LOGOUT,
} from './userType.types';

export function setLoader(type, data) {
    return {
        type: type,
        value: data,
    }
}
export function userDetail(type, user) {
    return {
        type: type,
        value: user
    }
}
export function adminDetail(type, admin) {
    return {
        type: type,
        value: admin
    }
}
export function signupStatus(type, status) {
    return {
        type: type,
        value: status
    }
}
export function loginStatus(type, status) {
    return {
        type: type,
        value: status,
    }
}
export function setToken(type, token) {
    return {
        type: type,
        value: token,
    }
}

export function setRole(type, role) {
    return {
        type: type,
        value: role
    }
}

export function isUserLoggedIn(type, isLogged) {
    return {
        type: type,
        value: isLogged
    }
}
export function logoutFun(type, logout){
    return {
        type: type,
        value: logout
    }
}

//-----------------------------------USER-------------------------------------
// ------------user sign in-------------
export function userSignUp(userInfo) {
    return (dispatch) => {
        dispatch(setLoader(SET_LOADER_USER, true));
        delete userInfo.confirmPassword;

        api.postAsJsonLocal('/signup', userInfo)
            .then((response) => {
                dispatch(userDetail(SET_USER_DETAIL, response.data.user))
                dispatch(signupStatus(SET_SIGNUP_STATUS, response.status))
                dispatch(setLoader(SET_LOADER_USER, false));
            })
            .catch((error) => {
                dispatch(setLoader(SET_LOADER_USER, false));
            })
    }
}
//----------user signin--------------------
export function userLogin(userInfo) {

    console.log('userInfouserInfo::', userInfo);
    return (dispatch) => {
        dispatch(setLoader(SET_LOADER_USER, true));
        return new Promise((resolve, reject) => {
            api.postAsJsonLocal('/signin', userInfo)
                .then((response) => {
                    console.log('SET_USER_DETAIL::', response);
                    dispatch(setLoader(SET_LOADER_USER, false));
                    dispatch(userDetail(SET_USER_DETAIL, response.data.user));
                    dispatch(loginStatus(SET_LOGIN_STATUS, response.status));
                    setCookie('access_token', response.data.token);
                    window.localStorage.setItem('access_token', response.data.token);
                    dispatch(setToken(SET_TOKEN, response.data.token));
                    dispatch(setRole(SET_ROLE, response.data.user.role));
                    dispatch(isUserLoggedIn(IS_USER_LOGGED_IN, true));
                    resolve({ success: response.data })
                })
                .catch((error) => {
                    console.error('user login error------', error);
                    dispatch(setLoader(SET_LOADER_USER, false))
                    dispatch(isUserLoggedIn(IS_USER_LOGGED_IN, false))
                    reject({ success: false, error: error });
                })
        })
    }
}
//-------logout user-------------
export function logout() {
    console.log('logout action----------')
    return (dispatch) => {
        dispatch(logoutFun(LOGOUT, true))
        dispatch(isUserLoggedIn(IS_USER_LOGGED_IN, false));
        localStorage.clear();
        sessionStorage.clear();
        deleteCookie('access_token')
    }
}

//---END--------------------------------USER-END------------------------------------

//-----------------------------------ADMIN-------------------------------------
// --------------------------------admin sign up--------------------------------
export function adminSignup(adminInfo) {
    adminInfo.role = "admin";
    return (dispatch) => {
        dispatch(setLoader(SET_LOADER_USER, true));

        api.postAsJsonLocal('/admin/signup', adminInfo)
            .then((response) => {
                dispatch(setLoader(SET_LOADER_USER, false))
                dispatch(adminDetail(SET_ADMIN_DETAIL, response.data.adminUser));
                dispatch(signupStatus(SET_SIGNUP_STATUS, response.status));
            })
            .catch((error) => {
                console.error('---admin signup error---', error);
                dispatch(setLoader(SET_LOADER_USER, false));
            })
    }
}
// --------------------------------admin sign in--------------------------------
export function adminLogin(adminInfo) {
    console.log('--2--- admin signin', adminInfo);
    return (dispatch) => {
        dispatch(setLoader(SET_LOADER_USER, true))
        return new Promise((resolve, reject) => {
            api.postAsJsonLocal('/admin/signin', adminInfo)
                .then((response) => {
                    console.log('--3--- admin signin api repsosne---', response);
                    dispatch(setLoader(SET_LOADER_USER, false));
                    dispatch(adminDetail(SET_ADMIN_DETAIL, response.data.adminUser));
                    dispatch(loginStatus(SET_LOGIN_STATUS, response.status));
                    dispatch(setToken(SET_TOKEN, response.data.token));
                    setCookie('access_token', response.data.token);
                    dispatch(setRole(SET_ROLE, response.data.adminUser.role));
                    dispatch(isUserLoggedIn(IS_USER_LOGGED_IN, true));
                    resolve({ success: response.data })
                })
                .catch((error) => {
                    console.log('---3--- errro admin signin ---', error);
                    dispatch(setLoader(SET_LOADER_USER, false));
                    reject({ success: false, error: error })
                })
        })
    }
}

//-----------------------------------USER-END------------------------------------



