import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream, returnIceCream } from '../redux/iceCream/iceCreamActions'

function IceCreamContainer(props) {
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Number of ice creams: {props.numberOfIceCreams}</h1>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
      <button style={{marginLeft: '2px'}} onClick={props.returnIceCream}>Return IceCream</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numberOfIceCreams: state.iceCream.numberOfIceCreams
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
    returnIceCream: () => dispatch(returnIceCream())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)