import {createSlice} from '@reduxjs/toolkit';
const authSlice  =  createSlice({
    name:"auth",
    initialState:{
        isloggedin:false,
        validation:{
            password:false,
            userid:false,
            username:false,
            email:false,
            tel:false
        },
        user:[

        ]
    },
    reducers:{
        register(state, action){
            const newUser = action.payload;
            state.user.push({
                 username:newUser.username,
                 password:newUser.password,
                 tel:newUser.tel,
                 email:newUser.email
            })
            alert("account created succesfully")
        },
        authname(state, action){
            const username = action.payload;
            var count = username.length;
            alert(count);
            if(count < 8){
                state.validation.username = false
            }
            else if(count >= 8){
                state.validation.username = true
            }
        },
        authemail(state, action){
            const email = action.payload
            if(email.length < 12){
                state.validation.email = false
            }
            else if(email.lenght > 12){
                state.validation.email = true
            }
        },
        authpass(state, action){
            const pass = action.payload
            if(pass.lenght < 8){
                state.validation.password = false
            }
            else if(pass.lenght > 8){
                state.validation.password = true
            }
        },
        signin(state, action){
           state.isloggedin = true;
        },
        loggout(state,action){
            state.isloggedin = false;
        }
    }
})
export const validGroup = (state) => state.auth.validation
export const loggedin = (state) => state.auth.isloggedin
export const authactions = authSlice.actions
export default authSlice.reducer;