import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake, returnCake } from '../redux/cake/cakeActions'

function CakeContainerWithPayload(props) {
  const [number, setNumber] = useState('');
  return (
    <div style={{textAlign: 'center', marginTop: '5px'}}>
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder='insert your taked cake'/>
      <button style={{marginLeft: '2px'}} onClick={() => props.buyCake(number)}>Buy {number} Cake</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
    returnCake: () => dispatch(returnCake())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainerWithPayload)