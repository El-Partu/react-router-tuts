import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  start: 1,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.start < 10) {
        state.start += 1;
      }
    },
    decrement: (state) => {
      if (state.start > 1) {
        state.start -= 1;
      }
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
