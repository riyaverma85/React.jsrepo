import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState:{
        count:0
        
    },
    reducers:{
        increment:(state)=>{
            state.count ++;
              
        },
        decrement:(state)=>{
            if(state.count==0)
            {
                alert("Not Less Than 0!")
            }
            else{
             state.count --;
            }
            
        },
        reset:(state)=>{
            state.count=0;
        }

    }
})
export const{increment,decrement,reset}=counterSlice.actions;
export default counterSlice.reducer;