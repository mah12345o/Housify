import { createStore } from 'redux';

const COUNTER_ADD = "COUNTER_ADD";
const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_ITEM = "REMOVE_ITEM";

const initialstate = {
    counteradd: 0,
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
};

const reducer = (state = initialstate, action) => {
    switch (action.type) {
        case COUNTER_ADD:
            return {
                ...state,
                counteradd: state.counteradd + 1,
                inputValue: action.payload,
            };
        case ADD_TO_CART:
            const updatedCartItems = [...state.cartItems, action.payload];
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
            return {
                ...state,
                cartItems: updatedCartItems,
            };
        case REMOVE_ITEM:
            const itemIdToRemove = action.payload;
            const filteredCartItems = state.cartItems.filter(
                (item) => item.id !== itemIdToRemove
            );
            localStorage.setItem('cartItems', JSON.stringify(filteredCartItems));
            return {
                ...state,
                cartItems: filteredCartItems,
            };
        default:
            return state;
    }
};

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
