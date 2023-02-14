import { createSlice } from "@reduxjs/toolkit";
import { authInitState } from "./auth.initialState";
import { logIn, logOut, refreshUser, register } from "./auth.thunk";

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
            .addCase(logIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            })
            .addCase(logOut.fulfilled, state => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;

            })


})

export const authReducer = authSlice.reducer