import { createSlice, nanoid } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items:[],
        totalPrice:0
    },
    reducers: {
        addItemsToCart: (state, action) => {
            const { img, price, title } = action.payload;
            state.items.push({ id: nanoid(), img: img, price: price, title: title });
        },
        removeItemsFromCart: (state, action) => {
    state.items = state.items.filter((item) => item.id !== action.payload);
},
        setTotal: (state) => {
            const totalPrice = state.items.reduce((accumulator, item) => {
                return accumulator + parseInt(item.price);
            }, 0);
            state.totalPrice = totalPrice;
        },
    },
});

export const { addItemsToCart, removeItemsFromCart, setTotal } = cartSlice.actions;
export default cartSlice.reducer;
