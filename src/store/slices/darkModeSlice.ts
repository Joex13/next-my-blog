import { createSlice } from '@reduxjs/toolkit';

export const darkModeSlice = createSlice({
  name: 'DarkMode',
  initialState: {
    isDarkMode: true,
    styleDarkMode: 'text-white bg-slate-700',
    styleLightMode: 'text-slate-700 bg-orange-200',
  },
  reducers: {
    toggle: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggle } = darkModeSlice.actions;

export default darkModeSlice.reducer;
