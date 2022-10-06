import { createSlice } from "@reduxjs/toolkit";

const flowSlice = createSlice({
  name: "ReduxSagaFlowSlice",
  initialState: {
    isFetching: false,
    result: 0,
  },
  reducers: {
    add: (state, actions) => {
      console.log("@CC 2.1: Add reducer started");
      state.isFetching = true;
      console.log("@CC 2.2: Add reducer completed");
    },
    addSuccess: (state, actions) => {
      console.log("@CC 4.1: addSuccess reducer started");
      state.isFetching = false;
      state.result = actions.payload.result;
      console.log("@CC 4.2: addSuccess reducer completed");
    },
    addFailed: (state, actions) => {
      state.isFetching = false;
      console.log("Addition failed")
    },
  },
});

export const { add,addFailed,addSuccess} = flowSlice.actions;

export default flowSlice.reducer;
