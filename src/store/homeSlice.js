import { createSlice, nanoid } from "@reduxjs/toolkit";
const localData = JSON.parse(localStorage.getItem("items")) 
export const homeSlice = createSlice({
    name: 'home',
    initialState: localData || [],

    reducers: {
        addToCart: (state, action) => {
            const { title, img, price } = action.payload
            state.push({ id: nanoid(), img: img, title: title, price: price })
            setLocalData(JSON.stringify(state))
        }

    }
})
const setLocalData = (state) => {
    localStorage.setItem("items", state)
}
export const { addToCart } = homeSlice.actions
export default homeSlice.reducer