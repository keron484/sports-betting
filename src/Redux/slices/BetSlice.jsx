import {createSlice} from "@reduxjs/toolkit";
const placebetSlice = createSlice({
    name:"placebet",
    initialState:{
        acc_balance:0,
        bonus_account:0,
        count:0,
        id_count:0,
        msg_count:0,
        b_acc_id:10,
        events_list:[
           
        ],
        bonus_event_list:[

        ],
        messages:[

        ],
        promo_code:[
             { 
                id:"1",
                promocode:"ST329479238SAD",
                amount:5000,
                expire_date:"12-10-2023"
             },
             {
                id:"2",
                promocode:"ST23948ASJILJASK",
                amount:6000,
                expire_date:"12-10-2023"
             },
             {
                id:"3",
                promocode:"STAOPOSDK2318U93",
                amount:7000,
                expire_date:"12-10-2023"
             }
        ]
    },
    reducers:{
        placebet(state, action)
        {
           const newItems = action.payload
           const stake = newItems.stake
           if(stake > state.acc_balance)
           {
            alert("insufficient Balance")
           }
           else{
            var slip_id = state.id_count += 1
            state.events_list.push({
                id: slip_id,
                stake:newItems.stake,
                potential_wininings:newItems.potential_wininings,
                bonus_calcu:newItems.bonus_calcu,
                date:newItems.date,
                bettype:newItems.bettype,
                points:newItems.points,
                totalOdds:newItems.totalOdds,
                selected_events:newItems.selected_events
            })
            state.acc_balance -= stake
            alert("bet accepted")
           }
        },
        accountdeposite(state, action)
        {
            
           var deposite_amount = action.payload;
           state.acc_balance += deposite_amount
           state.count += 1
           var message_id = state.msg_count += 1
           state.messages.push({
               id:message_id,
               title:"Succesfull reciept of funds",
               body:`Your deposite was successfully, you have successfully deposited the sum of ${deposite_amount}`
           })
           alert("deposite was successfull", deposite_amount)
           if(state.count === 1)
           { 
             state.bonus_account = deposite_amount *= 3.5
           }
           else{
                   
           }
        },
        placebousbet(state, action)
        {
            const newItems = action.payload
            const stake = newItems.stake
            if(stake > state.bonus_account)
            {
             alert("insufficient balance");
            }
            else{
             var bonus_id = state.b_acc_id += 1  
             state.bonus_event_list.push({
                 id: bonus_id,
                 stake:newItems.stake,
                 potential_wininings:newItems.potential_wininings,
                 date:newItems.date,
                 bettype:newItems.bettype,
                 totalOdds:newItems.totalOdds,
                 selected_events:newItems.selected_events
             })
             state.bonus_account -= stake
             alert("Bet accepted");
            }

        },
        removemessage(state, action){
            const id = action.payload
            const existingItem = state.messages.find(item => item.id === id);
            if(existingItem)
            {
                state.messages = state.messages.filter((item) => item.id !== id);
            }
            else{

            }
        },
        cashout(state, action)
        {
            const amount  = action.payload
            if(state.acc_balance <=  0 )
            {
                alert("Insufficient Balance")
            }
            else if(state.acc_balance < amount)
            {
                alert("Insufficient Balance")
            }
            else{
                state.acc_balance -= amount
                state.count += 1
                var message_id = state.msg_count += 1
                state.messages.push({
                    id:message_id,
                    title:"successfull withdraw of funds",
                    body:`You have succesfully withdrawn ${amount}`
                })
                alert("Withdrawal was successfull");
            }
        },
        deletebetslip(state, action)
        {
            const id = action.payload;
            const existingItem = state.events_list.find(item => item.id === id);
            if(existingItem)
            {
                state.events_list = state.events_list.filter((item) => item.id !== id);
                alert("Bet slip deleted succefuly this action can't be reverted");
            }
            else{
                alert("Something went terribly wrong")
            }
        },
        deletebonusbet(state, action)
        {
            const id = action.payload;
            const existingItem = state.bonus_event_list.find(item => item.id === id);
            if(existingItem)
            {
                state.events_list = state.bonus_event_list.filter((item) => item.id !== id);
            }
            else{

            }
        },
        placepromocodebet(state, action)
        {
           

        }
        
    }
})
export const promo_code_list = (state) => state.placebet.promo_code
export const message_list = (state) => state.placebet.messages
export const bonus_bet_list = (state) => state.placebet.bonus_event_list
export const b_account = (state) => state.placebet.bonus_account
export const num_deposites = (state) => state.placebet.count
export const slipitems = (state) => state.placebet.events_list
export const placebetActions = placebetSlice.actions
export const user_balance = (state) => state.placebet.acc_balance;
export default placebetSlice.reducer