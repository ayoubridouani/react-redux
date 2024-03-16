import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from './rootReducer'
import logger from 'redux-logger'

//export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(logger)));