import { createStore } from 'redux';
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { ActionT } from './actions';
import { StateT } from './reducer';
import url from './middlewares/url';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const middlewares = [thunk, url];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(...middlewares);

export interface StoreT {
  getState: () => StateT;
  dispatch: (action: ActionT) => void;
}

export default createStore(reducer, composeEnhancers(middleware));
