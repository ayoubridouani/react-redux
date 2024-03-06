import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake, returnCake } from '../redux/cake/cakeActions'

function HooksCakeContainer() {
    const numberOfCakes = useSelector((state) => {
        return state.numberOfCakes
    });

    const dispatch = useDispatch();

    return (
        <div style={{textAlign: 'center'}}>
            <h1>Number of cakes (Hooks): {numberOfCakes}</h1>
            <button onClick={() => {dispatch(buyCake())}}>Buy Cake</button>
            <button style={{marginLeft: '2px'}} onClick={() => {dispatch(returnCake())}}>Return Cake</button>
        </div>
    )
}

export default HooksCakeContainer