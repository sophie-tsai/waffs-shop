import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartItems";
import { Store } from "redux";

const rootReducer = combineReducers({
  cart: cartReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const storeAndPersistor = () => {
  const store: Store = createStore(persistedReducer);
  const persistor = persistStore(store);
  return { store, persistor };
};

export default storeAndPersistor;
