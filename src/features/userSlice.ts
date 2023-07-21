import { createSlice } from "@reduxjs/toolkit";

interface User {
  [key: string]: string | undefined;
}
const initialState: User = {};

// Create the cake slice
const userSlice = createSlice({
  name: "user", // Name of the slice
  initialState, // Initial state object
  reducers: {
    setUser: (state, action) => ({ ...action.payload }),
    resetUser: () => initialState,
  },
});

// Export the action creators
export const { setUser, resetUser } = userSlice.actions;
// Export the reducer
export default userSlice.reducer;
