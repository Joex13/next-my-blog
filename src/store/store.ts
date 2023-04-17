import { configureStore } from '@reduxjs/toolkit';
import isDarkModeReducer from "@/store/slices/isDarkModeSlice";

export const store = configureStore({
  reducer: {
    isDarkMode: isDarkModeReducer,
  },
});
