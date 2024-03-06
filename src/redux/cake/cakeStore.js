import  { createStore } from 'redux';
import cakeReducer from './cakeReducer';

export const cakeStore = createStore(cakeReducer);