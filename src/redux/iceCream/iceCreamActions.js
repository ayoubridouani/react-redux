import { BUY_ICECREAM, RETURN_ICECREAM } from "./actionTypes"

export const buyIceCream = () => {
    return {
        type: BUY_ICECREAM
    }
}

export const returnIceCream = () => {
    return {
        type: RETURN_ICECREAM
    }
}