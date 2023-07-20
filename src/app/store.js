import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

// Combine reducers if you have multiple slices
const rootReducer = {
  user: userReducer,
};

// Configure the Redux store
const store = configureStore({
  reducer: rootReducer,
  // Add any additional store configurations here if needed
});

export default store;
