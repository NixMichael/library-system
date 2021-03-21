import axios from 'axios'
import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT } from '../constants/UserConstants'

export const signInAction = (userName, password) => async(dispatch) => {

    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })


        const { data } = await axios({
            method: 'post',
            url: 'http://localhost:5000/api/signin', 
            headers: { 'Content-Type': 'application/json' },
            data: { 
                un: userName,
                pw: password
            }
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        // localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }

    // if (signIn === true) {
    //     return {
    //         type: 'SIGNIN'
    //     }
    // } else {
    //     return {
    //         type: 'SIGNOUT'
    //     }
    // }
}

export const signOutAction = () => async(dispatch) => {
    dispatch({
        type: USER_LOGOUT
    })
}