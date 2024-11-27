import { configureStore } from "@reduxjs/toolkit";
import { alertSlice } from "./features/alertSlice";
import { authSlice } from "./features/auth/authSlice";
import jobSlice from "./features/jobslice.js"; // Import jobsSlice

export default configureStore({
  reducer: {
    alerts: alertSlice.reducer,
    auth: authSlice.reducer,
    jobs: jobSlice, // Add jobs slice
  },
});
