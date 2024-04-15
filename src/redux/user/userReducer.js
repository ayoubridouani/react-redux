import * as actions from "./actionTypes"

const initState = {
    loading: false,
    data: [],
    error: ''
}

export const userReducer = (state = initState, action) => {
    console.log(state)
    switch(action.type) {
        case actions.FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
                data: [],
                error: ''
            }

        case actions.FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ''
            }

        case actions.FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            }

        default:
            return state
    }
}