import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    update: (state, action) => {
      console.log(state);
      console.log(action);
      state.value = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { update } = roomSlice.actions;

export default roomSlice.reducer;