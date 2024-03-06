import { BUY_ICECREAM, RETURN_ICECREAM } from "./actionTypes"

const initialState = {
    numberOfIceCreams: 20
}

const iceCreamReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_ICECREAM:
            return {
                numberOfIceCreams: state.numberOfIceCreams - 1
            }
        case RETURN_ICECREAM:
            return {
                numberOfIceCreams: state.numberOfIceCreams + 1
            }
        default:
            return state
    }
}

export default iceCreamReducer