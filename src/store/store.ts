import { configureStore } from '@reduxjs/toolkit';
import isDarkModeReducer from "@/store/slices/darkModeSlice";

export const store = configureStore({
  reducer: {
    darkMode: isDarkModeReducer,
  },
});
