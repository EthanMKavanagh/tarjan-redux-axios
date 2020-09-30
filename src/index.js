import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import createSagaMiddleware from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


const bookList = (state = [], action) => {
  if (action.type === 'SET_BOOKS') {
    let newBookList = action.payload;
    return newBookList;
  }

  return state;
}

function* fetchBooksSaga(action) {
  console.log('hit fetchBooksSaga with', action);
  let response = yield axios({
    method: 'GET',
    url: '/books'
  });

  console.log('Got some books', response.data);
  yield put({
    type: 'SET_BOOKS',
    payload: response.data
  });
}

function* watcherSaga() {
  yield takeEvery('FETCH_BOOKS', fetchBooksSaga);
}

// Create our Saga Middleware
const sagaMiddleware = createSagaMiddleware();

const reduxStore = createStore(
  combineReducers({
    bookList
  }),
  applyMiddleware(logger, sagaMiddleware)
);

sagaMiddleware.run(watcherSaga);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();