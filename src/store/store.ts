import { configureStore } from '@reduxjs/toolkit';
import isDarkModeReducer from '@/store/slices/darkModeSlice';
import hamburgerReducer from '@/store/slices/hamburgerSlice';

export const store = configureStore({
  reducer: {
    darkMode: isDarkModeReducer,
    hamburger: hamburgerReducer,
  },
});
