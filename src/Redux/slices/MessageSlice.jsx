import {createSlice} from "@reduxjs/toolkit"
const messageSlice = createSlice({
    name:"msgSlice",
    initialState:{
        messages:[
            {
                id:"1",
                title:"strato bet promo",
                body:"hello world"
                
            }
        ]
    },
    reducers:{
        removemessage(state, action){
            const id = action.payload
            const existingItem = state.messages.find(item => item.id === id);
            if(existingItem)
            {
                state.messages = state.messages.filter((item) => item.id !== id);
            }
            else{

            }
        }
    }
})
export const messagesList = (state) => state.msgSlice.messages
export const messageAcitons = messageSlice.actions
export default messageSlice.reducer