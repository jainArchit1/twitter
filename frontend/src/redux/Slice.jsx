import { createSlice } from "@reduxjs/toolkit";
const Slice = createSlice({
  name: "user",
  initialState: {
    user: null,
    otherUusers: null,
  },
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },
    getOtherUser: (state, action) => {
      state.otherUusers = action.payload;
    },
  },
});
export const { getUser, getOtherUser } = Slice.actions;
export default Slice.reducer;
