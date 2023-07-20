import { createSlice } from "@reduxjs/toolkit";

interface User {
  id: number;
  name: string;
  avatar_url: string;
  // ... other properties
}
// Define the initial state
export const userInitialState = {
  id: 0,
  name: "",
  avatar_url: "",
  // ... other initial properties
};
const initialState: User = userInitialState;

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