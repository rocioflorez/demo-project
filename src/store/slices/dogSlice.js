import { createSlice } from "@reduxjs/toolkit";

export const dogSlice = createSlice({
    name: 'dogs',
    initialState: {
        dogs: [],
        isLoading: false,
    },
    reducers: {
        startLoadingDogs: (state) => {
            state.isLoading = true;
        },
        setDogs: (state, action) => {
            state.isLoading = false;
            state.dogs = action.payload.dogs;
        }
    }
});

export const { startLoadingDogs, setDogs } = dogSlice.actions;