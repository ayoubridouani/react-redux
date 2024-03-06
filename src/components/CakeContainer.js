import React from 'react'
import { connect } from 'react-redux'
import { buyCake, returnCake } from '../redux/cake/cakeActions'

function CakeContainer(props) {
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Number of cakes: {props.numberOfCakes}</h1>
      <button onClick={props.buyCake}>Buy Cake</button>
      <button style={{marginLeft: '2px'}} onClick={props.returnCake}>Return Cake</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.numberOfCakes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    returnCake: () => dispatch(returnCake())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)