import { configureStore } from "@reduxjs/toolkit";
import { dogSlice } from "./slices/dogSlice";

export const store = configureStore({
    reducer : {
        dogs: dogSlice.reducer
    },
})