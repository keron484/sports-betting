import { configureStore } from "@reduxjs/toolkit";
import betslipReducer from "./BetslipSlice";
import msgSliceReducer from "./MessageSlice";
import placebetReducer from "./bet";
import authReducer from "./authslice";
const store = configureStore({
    reducer:{
        betslip:betslipReducer,
        msgSlice:msgSliceReducer,
        placebet:placebetReducer,
        auth:authReducer
    }
})
export default store;