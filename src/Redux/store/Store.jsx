import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/AuthSlice";
import msgSliceReducer from "../slices/MessageSlice";
import placebetReducer from "../slices/BetSlice";
import betslipReducer from "../slices/BetslipSlice"
const store = configureStore({
    reducer:{
        betslip:betslipReducer,
        msgSlice:msgSliceReducer,
        placebet:placebetReducer,
        auth:authReducer
    }
})
export default store;