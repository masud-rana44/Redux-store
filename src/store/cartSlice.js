import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    add: function (state, action) {
      // createSlice can mutate original array
      state.push(action.payload);
    },

    remove: function (state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cardSlice.actions;
export default cardSlice.reducer;
