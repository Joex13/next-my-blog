import { createSlice } from '@reduxjs/toolkit';

export const isDarkModeSlice = createSlice({
  name: 'isDarkMode',
  initialState: true,
  reducers: {
    toggle: (state) => (state = !state),
  },
});

export const { toggle } = isDarkModeSlice.actions;

export default isDarkModeSlice.reducer;
