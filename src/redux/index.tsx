import { combineReducers, createStore } from "redux";
import cartReducer, { addItem } from "./cartItems";

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

store.subscribe(() => console.log("global state", store.getState()));

export default store;
