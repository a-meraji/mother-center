import { createSlice } from "@reduxjs/toolkit";

const transactionSlice = createSlice({
  name: "transactions",
  initialState: {
    tranArray:[{
    "persianDate": 0,
    "cost": 0,
    "transactionId": 0,
    "createdBy": "",
    "product": "subscribtion",
    "subscribeDate": 0,
    "details": ""}]
  },
  reducers: {
    userFetched:(state,action)=>{},
    setTransactions: (state, action) => {
      state.tranArray = action.payload
    },
  },
});

export const {
  setTransactions,userFetched
} = transactionSlice.actions;
export default transactionSlice.reducer;
