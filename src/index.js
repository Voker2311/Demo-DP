import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StateProvider } from './StateProvider';
import { initialState, reducer } from './reducer';

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </StateProvider>,
  document.getElementById('root')
);


