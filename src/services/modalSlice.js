import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showloginModal: false,
  showregisterModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setshowloginModal(state, action) {
      state.showloginModal = action.payload;
    },
    setshowregisterModal(state, action) {
      state.showregisterModal = action.payload;
    },
  },
});

export const { setshowloginModal, setshowregisterModal } = modalSlice.actions;
export default modalSlice.reducer;
