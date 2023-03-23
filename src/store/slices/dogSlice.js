import { createSlice } from "@reduxjs/toolkit";

export const dogSlice = createSlice({
    name: 'dogs',
    initialState: {
        dogs: []
    },
    reducers: {
        setDogs: (state, action) => {
            state.dogs = action.payload.dogs;
        }
    }
});

export const { setDogs } = dogSlice.actions;