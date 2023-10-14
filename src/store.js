import { configureStore } from "@reduxjs/toolkit";
import { homeApi } from "./services/homeApiServices";
import { reserveSlice } from "./services/ReserveSlice";
import { userApi } from "./services/userApiServices";
import modalSlice from "../src/services/modalSlice";

export const store = configureStore({
  reducer: {
    [homeApi.reducerPath]: homeApi.reducer,
    reserve: reserveSlice.reducer,
    [userApi.reducerPath]: userApi.reducer,
    modalSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(homeApi.middleware, userApi.middleware),
});
