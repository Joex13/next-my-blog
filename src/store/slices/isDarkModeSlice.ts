import { createSlice } from '@reduxjs/toolkit';

export const isDarkModeSlice = createSlice({
  name: 'isDarkMode',
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

export const { toggle } = isDarkModeSlice.actions;

export default isDarkModeSlice.reducer;
