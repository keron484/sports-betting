import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/AuthSlice";
import msgSliceReducer from "../slices/MessageSlice";
import placebetReducer from "../slices/BetSlice";
import betslipReducer from "../slices/BetslipSlice";
import { persistReducer, persistStore } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import { combineReducers } from "redux";
const persistConfig = {
    key: 'root',
    storage:storageSession,
  }
  const rootReducer = combineReducers({ 
      betslip:betslipReducer,
      auth:authReducer,
      placebet:placebetReducer,
      msgSlice:msgSliceReducer
  })
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer:persistedReducer,
   
})
export const persistor = persistStore(store);