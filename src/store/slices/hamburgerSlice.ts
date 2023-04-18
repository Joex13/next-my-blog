import { createSlice } from '@reduxjs/toolkit';

const hamburgerSlice = createSlice({
  name: 'Hamburger',
  initialState: {
    isOpen: false
  },
  reducers: {
    toggle: (state: any) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggle } = hamburgerSlice.actions;

export default hamburgerSlice.reducer;
