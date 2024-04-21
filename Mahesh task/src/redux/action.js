const COUNTER_ADD ='COUNTER_ADD';
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_ITEM = "REMOVE_ITEM";


export function increment(value) {
    return {
       type: COUNTER_ADD,
       payload: value,
    }
 }
 export const addToCart = (cardInfo) => ({
    type: ADD_TO_CART,
    payload: cardInfo,
  });

  export const removeItem = (cardInfo) => ({
    type: REMOVE_ITEM,
    payload: cardInfo,
  });