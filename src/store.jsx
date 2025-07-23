import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./CounterSlice"
const store=configureStore({
    reducer:{
      counter:myReducer
    }
})
export default store;