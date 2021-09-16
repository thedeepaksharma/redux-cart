import { INCREASE, DECREASE, CLEARE_CART, REMOVE, GET_TOTALS } from "./actions";

function reducer(state, action){
  if(action.type === CLEARE_CART) {
    return { ...state, cart: [] };
  }
  if(action.type === INCREASE) {
    let tempCart = state.cart.map((cartItem)=>{
      if(cartItem.id === action.payload.id){
        cartItem = { ...cartItem, amount: cartItem.amount + 1 }
      }
      return cartItem;
    })
    return { ...state, cart: tempCart };
  }
  if(action.type === DECREASE) {
    let tempCart = [];
    if(action.payload.amount === 1){
      tempCart = state.cart.filter((cartItem) => cartItem.id !== action.payload.id);
    }
    else {
      tempCart = state.cart.map((cartItem)=>{
        if(cartItem.id === action.payload.id){
          cartItem = { ...cartItem, amount: cartItem.amount - 1 }
        }
        return cartItem;
      }) 
    }
    return { ...state, cart: tempCart };
  }
  if(action.type === REMOVE) {
    return { ...state, cart: state.cart.filter((cartItem) => 
      cartItem.id !== action.payload.id) };
  }
  if(action.type === GET_TOTALS){
    let { total, amount } = state.cart.reduce((cartTotal, cartItem) =>
     {
       const { price, amount } = cartItem;
       const itemTotal = price * amount;

       cartTotal.total += itemTotal;
       cartTotal.amount += amount;
       return cartTotal;
     },
     {
      total: 0,
      amount: 0
    });
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount }
  }
  return state;
}

export default reducer;

// switch (action.type){
//  case CLEARE_CART:
//    return { ...state, cart: [] };
//  default:
//    return state;
// }

//console.log(state, action);

//   if(action.type === DECREASE) {
//     //state.count = state.count - 1;
//     return {...state, count: state.count - 1};
//   }
//   if(action.type === INCREASE) {
//     //state.count = state.count + 1;
//     return {...state, count: state.count + 1};
//   }