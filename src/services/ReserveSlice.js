import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reserveData: {},
};

export const reserveSlice = createSlice({
  name: "reserve",
  initialState,
  reducers: {
    addReservation: (state, { payload }) => {
      state.reserveData = payload
    },
  },
});

export const {addReservation} = reserveSlice.actions;
export default reserveSlice.reducer;
