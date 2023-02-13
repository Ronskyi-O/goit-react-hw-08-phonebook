import { createSlice } from "@reduxjs/toolkit";
import { authInitState } from "./auth.initialState";

export const authSlice = createSlice({
    name: "auth",
    initialState: authInitState,

})