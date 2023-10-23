import { createSlice } from "@reduxjs/toolkit";

const roles = { admin: "admin", user: "user" };

const userSlice = createSlice({
  name: "user",
  initialState: {
    id:"",
    name: "",
    lastName: "",
    phone: "",
    email: "",
    subscribeDate: 0,
    unlimited: false,
    role: roles.admin,
  },
  reducers: {
    setUser: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export {roles };
export const {
  setUser
} = userSlice.actions;
export default userSlice.reducer;
