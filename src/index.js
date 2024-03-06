import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import { cakeStore } from './redux/cake/cakeStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={cakeStore}>
      <App />
    </Provider>
  </React.StrictMode>
);