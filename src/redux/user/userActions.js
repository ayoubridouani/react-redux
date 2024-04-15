import axios from "axios"
import * as actions from "./actionTypes"

export const fetchUserRequest = () => {
    return {
        type: actions.FETCH_USERS_REQUEST,
        payload: {
            loading: true
        }
    }
}

export const fetchUserSuccess = (users) => {
    return {
        type: actions.FETCH_USERS_SUCCESS,
        payload: {
            data: users
        }
    }
}

export const fetchUserFailure = (error) => {
    return {
        type: actions.FETCH_USERS_FAILURE,
        payload: {
            error: error
        }
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            const users = response.data
            dispatch(fetchUserSuccess(users))
        })
        .catch((error) => {
            const errorMsg = error.message
            dispatch(fetchUserFailure(errorMsg))
        })
    }
}