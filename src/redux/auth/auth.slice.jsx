import { createSlice } from "@reduxjs/toolkit";
import { authInitState } from "./auth.initialState";
import { register } from "./auth.thunk";

export const authSlice = createSlice({
    name: "auth",
    initialState: authInitState,
    extraReducers: builder =>
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })


})

export const authReducer = authSlice.reducer