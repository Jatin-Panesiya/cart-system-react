import { createSlice, nanoid } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addItemsToCart: (state, action) => {
            const {img, price, title } = action.payload;
            state.push({ id: nanoid(), img: img, price: price, title: title })
        },
        removeItemsFromCart : (state,action)=>{
            return state.filter((e)=>e.id !== action.payload)
            
        }
    }
})

export const { addItemsToCart,removeItemsFromCart } = cartSlice.actions
export default cartSlice.reducer