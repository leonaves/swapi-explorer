import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'

import App from './App';

import rootReducer from './reducers'
import saga from './sagas'

import './index.css';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(saga);

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
