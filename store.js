import { configureStore } from "@reduxjs/toolkit";
import naveReducer from "./slices/navSlice";

export const store = configureStore({
    reducer: {
        nav:naveReducer,
    },
});