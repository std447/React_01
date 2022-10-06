import { createSlice } from '@reduxjs/toolkit';


const MeraCalcSlice = createSlice({
  name:"calcSlice",
  initialState:{
    result:0,
  },
  reducers:{
    add:(state,action)=>{
      const {num1,num2} = action.payload;
      state.result = +num1 + +num2;
    },
    substract:(state,action)=>{
      const {num1,num2} = action.payload;
      state.result = num1 - num2;
    },
    multiply:(state,action)=>{
      const {num1,num2} = action.payload;
      state.result = num1 * num2;
    },
    divide:(state,action)=>{
      const {num1,num2} = action.payload;
      state.result = num1 / num2;
    },
  }
})

export const {add,substract,multiply,divide} = MeraCalcSlice.actions;
export default MeraCalcSlice.reducer;