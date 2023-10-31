import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice"
import cartSlice from "./cartSlice";


export const store = configureStore({
    reducer: {
        home: homeSlice,
        cart: cartSlice
    }
})