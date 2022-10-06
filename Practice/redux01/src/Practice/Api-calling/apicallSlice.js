import { createSlice } from "@reduxjs/toolkit";

const apicallSlice = createSlice({
  name:"ApiCall",
  initialState:{
    isLoding:false,
    data:[]
  },

  reducers:{
    request:(state,actions)=>{
      state.isLoding = true
    },
    requsetSuccess:(state,actions)=>{
      console.log("@CC actions",actions)
      state.isLoding = false;
      state.data = actions.payload.data;
    },
    requestFail:()=>{},
  }
});

export const {request,requsetSuccess, requestFail} = apicallSlice.actions;

export default apicallSlice.reducer;

