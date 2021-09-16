import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff

//store - stores data, think of state
//reducer - function that used to update store
//two arguments - state, action
//state - old state/state before update
//action - what happened/what update
//return updated or old state

import {createStore} from "redux";
//dispatch method - send actions to the store
//actions (Object) - MUST HAVE TYPE PROPERTY - what kind of action
//DON'T MUTATE THE STATE - redux built on IMMUTABILITY (copy)
//store.getState() 
// import { INCREASE, DECREASE } from "./actions";
import reducer from "./reducer";
//react-redux - Provider - wraps app, connect - used in components
import {Provider} from 'react-redux';
//initial store
const initialStore = {
  cart: cartItems,
  total: 105,
  amount: 5
}
// const DECREASE = "DECREASE";
// const INCREASE = "INCREASE";
//reducer

const store = createStore(reducer, initialStore);

// store.dispatch({type: INCREASE});
// store.dispatch({type: DECREASE});

// console.log(store.getState());

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar  />
      <CartContainer  />
    </Provider>
  );
}

export default App;
