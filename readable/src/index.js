import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import ReduxPromise from 'redux-promise'
import ReduxThunk from 'redux-thunk'

import './index.css';
import App from './App';
import reducePageActions from './Post/PageReducer'

const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd(action.type)
  return result;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const allReducers = combineReducers({
  reducePageActions
})

const store = createStore(
  allReducers,
  composeEnhancers(
    applyMiddleware(logger, ReduxPromise, ReduxThunk)
  )
)


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>,
  document.getElementById('root')
);
