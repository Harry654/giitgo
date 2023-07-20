import { createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState = {};

// Create the cake slice
const userSlice = createSlice({
  name: "user", // Name of the slice
  initialState, // Initial state object
  reducers: {
    setUser: (state, action) => ({ ...action.payload }),
  },
});

// Export the action creators
export const { setUser } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
