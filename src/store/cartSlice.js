import { createSlice, nanoid } from "@reduxjs/toolkit";
const localData = JSON.parse(localStorage.getItem("data")) || { items: [], totalPrice: 0 }
export const cartSlice = createSlice({
    name: "cart",
    initialState: localData,
    reducers: {
        addItemsToCart: (state, action) => {
            const { img, price, title } = action.payload;
            state.items.push({ id: nanoid(), img: img, price: price, title: title });
            setLocalData(JSON.stringify(state))
        },
        removeItemsFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
            setLocalData(JSON.stringify(state))
        },
        setTotal: (state) => {
            const totalPrice = state.items.reduce((accumulator, item) => {
                return accumulator + parseInt(item.price);
            }, 0);
            state.totalPrice = totalPrice;
            setLocalData(JSON.stringify(state))
        },
    },
});
const setLocalData = (state) => {
    localStorage.setItem("data", state)
}
export const { addItemsToCart, removeItemsFromCart, setTotal } = cartSlice.actions;
export default cartSlice.reducer;

