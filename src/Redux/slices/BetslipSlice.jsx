import { createSlice } from "@reduxjs/toolkit";
const slipslice = createSlice({
     name:"betslip",
     initialState:{
      selections:[],
        total_odds:0,
        num_events:0,
        progress:0,
        isSelected:false,     
     },
        
     reducers:{
        addTobetslip(state, action)
        {
           const newItems = action.payload;
           const itemIndex = state.selections.findIndex((items) => items.parentId === newItems.parentId);
           if(itemIndex >= 0){
            state.selections.splice(itemIndex, 1);
            state.selections.push({
               parentId: newItems.parentId,
               id: newItems.id,
               match_name: newItems.match_name,
               market_lable: newItems.market_lable,
               odd: newItems.odd,
               match_date: newItems.match_date,
               kick_off_time: newItems.kick_off_time,
               market_category: newItems.market_category,
               awname:newItems.awname,
               atlogo:newItems.atlogo,
               htname:newItems.htname,
               htlogo:newItems.htlogo
           })
         }
         
           else{
              state.selections.push({
                   id: newItems.id,
                   parentId: newItems.parentId,
                   match_name: newItems.match_name,
                   market_lable: newItems.market_lable,
                   odd: newItems.odd,
                   match_date: newItems.match_date,
                   kick_off_time: newItems.kick_off_time,
                   market_category: newItems.market_category,
                   awname:newItems.awname,
                   atlogo:newItems.atlogo,
                   htname:newItems.htname,                  
                   htlogo:newItems.htlogo,
               })
               state.num_events++;
               if(newItems.odd >= 1.40 && state.num_events <= 5)
               {
                  state.progress+=1;
               }
               else if(newItems.odd >= 1.44 && state.num_events > 5)
               {
                  state.progress+=3;
               }
               else if(newItems.odd >= 1.44 && state.num_events > 10 && state.total_odds >= 14)
               {
                  state.progress+=4;
               }
               else if(newItems.odd >= 1.44 && state.num_events > 20 && state.total_odds >= 28)
               {
                  state.progress+=5;
               }
              
           }
        },
        removeFromslip(state, action)
        {
           const id = action.payload;
           const existingItem = state.selections.find(item => item.id === id);
           if(existingItem)
           {
              state.selections = state.selections.filter((item) => item.id !== id);
              state.progress -= 1;
              state.num_events -= 1;
              state.isSelected =! state.isSelected
              
           }
           else
           {

           }

        },
        removeAllfromslip(state)
        {
            state.selections = [];
            state.num_events = 0;
            state.progress = 0;
        }

     }
})
export const selectedList = (state) => state.betslip.selections
export const count = (state) => state.betslip.num_events
export const odds = (state) => state.betslip.total_odds 
export const progress_bonus  = (state) => state.betslip.progress
export const isSelected = (state) => state.isSelected
export const slipActions = slipslice.actions
export default slipslice.reducer;