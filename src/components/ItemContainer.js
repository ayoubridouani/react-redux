import React from 'react'
import { connect } from 'react-redux'
import { buyCake, returnCake } from '../redux/cake/cakeActions'
import { buyIceCream, returnIceCream } from '../redux/iceCream/iceCreamActions'

function ItemContainer(props) {
  return (
    <div style={{textAlign: 'center'}}>
        <h1>Item - {props.item}</h1>
        <button onClick={props.buyItem}>Buy Item</button>
        <button style={{marginLeft: '2px'}} onClick={props.returnItem}>Return Item</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numberOfCakes : state.iceCream.numberOfIceCreams
    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchBuyItem = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())
    const dispatchReturnItem = ownProps.cake ? () => dispatch(returnCake()) : () => dispatch(returnIceCream())
    return {
        buyItem: dispatchBuyItem,
        returnItem: dispatchReturnItem,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
