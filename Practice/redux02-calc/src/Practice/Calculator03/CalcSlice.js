import { createSlice } from "@reduxjs/toolkit";

const MyCalcSlice = createSlice({
  name: "CalculatorSlice03",
  initialState:{
    result:0,
    isFetching:false,
  },
  reducers:{
    add:(state,action) => {
      console.log("@CC action",action);
      state.isFetching = true;
    },
    addSuccess:(state,action) => {
      state.isFetching = false;
      state.result = action.payload.result;
    },
    addFailed:(state,action) => {
      state.isFetching = false;
      //Error action
    },
  }
});

export const {add,addSuccess,addFailed} = MyCalcSlice.actions;

export default MyCalcSlice.reducer;

