import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';


const bookList = (state = [], action) => {
  if (action.type === `ADD_BOOK`) {
    // MUST return a new array, don't push...
    return [ ...state, action.payload ]
  }
  return state;
}

const reduxStore = createStore(
  combineReducers({
    // all reducers will go here...
    bookList
  }),
  applyMiddleware(logger)
);


ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();