import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./users/user.reducer";
import CartReducer from "./cart/cart.reducer";
import DirectoryReducer from "./Directory/Directory.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: CartReducer,
  directory: DirectoryReducer
});

export default persistReducer(persistConfig, rootReducer);
