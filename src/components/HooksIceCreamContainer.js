import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream, returnIceCream } from '../redux/iceCream/iceCreamActions'

function HooksIceCreamContainer() {
    const numberOfIceCreams = useSelector((state) => {
        return state.iceCream.numberOfIceCreams
    })

    const dispatch = useDispatch()

    return (
        <div style={{textAlign: 'center'}}>
            <h1>Number of ice creams (Hooks): {numberOfIceCreams}</h1>
            <button onClick={() => {dispatch(buyIceCream())}}>Buy IceCream</button>
            <button style={{marginLeft: '2px'}} onClick={() => {dispatch(returnIceCream())}}>Return IceCream</button>
        </div>
    )
}

export default HooksIceCreamContainer