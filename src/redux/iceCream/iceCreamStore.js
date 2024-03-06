import { createStore } from 'redux'
import iceCreamReducer from './iceCreamReducer'

export const iceCreamStore = createStore(iceCreamReducer)