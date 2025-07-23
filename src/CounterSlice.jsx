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
            
        }
    }
})
export const{increment,decrement}=counterSlice.actions;
export default counterSlice.reducer;