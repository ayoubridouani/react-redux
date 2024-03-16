import { BUY_CAKE, RETURN_CAKE } from "./actionTypes"

const initialState = {
    numberOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE:
            return {
                numberOfCakes: state.numberOfCakes - action.payload
            }
        case RETURN_CAKE:
            return {
                numberOfCakes: state.numberOfCakes + 1
            }
        default:
            return state
    }
}

export default cakeReducer