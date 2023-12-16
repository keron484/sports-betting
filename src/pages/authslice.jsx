import {createSlice} from '@reduxjs/toolkit';
const authSlice  =  createSlice({
    name:"auth",
    initialState:{
        isloggedin:false,
    },
    reducers:{
        nameauth(state){
             state.isloggedin =! state.isloggedin
        }
    }
})
export const loggedin = (state) => state.auth.isloggedin
export const authactions = authSlice.actions
export default authSlice.reducer;