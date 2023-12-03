import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { createWrapper, Context } from 'next-redux-wrapper';

import CartReducer from './cart/cart.reducer';

const reducer = combineReducers({
  cart: CartReducer,
});

const makeStore = (context: Context) => createStore(reducer, applyMiddleware(thunk));

export const wrapper = createWrapper(makeStore, {debug: true});
