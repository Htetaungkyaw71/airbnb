import { configureStore } from "@reduxjs/toolkit";
import { homeApi } from "./services/homeApiServices";
import { reserveSlice } from "./services/ReserveSlice";

export const store = configureStore({
  reducer: {
    [homeApi.reducerPath]: homeApi.reducer,
    reserve : reserveSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(homeApi.middleware),
});
