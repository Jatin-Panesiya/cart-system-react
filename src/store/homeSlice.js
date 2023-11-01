import { createSlice, nanoid } from "@reduxjs/toolkit";
let localData = [];
try {
    localData = JSON.parse(localStorage.getItem("items")) || []
} catch (e) {
    console.log(e)
}

export const homeSlice = createSlice({
    name: 'home',
    initialState: localData,
    reducers: {
        addToCart: (state, action) => {
            const { title, img, price } = action.payload
            state.push({ id: nanoid(), img: img, title: title, price: price,count:0 })
            setLocalData(JSON.stringify(state))
        },
        removeItem: (state, action) => {
           const newState =  state.filter((e) => e.id !== action.payload)
            setLocalData(JSON.stringify(newState))
            return newState
        }
    }
})

const setLocalData = (state) => {
    localStorage.setItem("items", state)
}
export const { addToCart, removeItem } = homeSlice.actions
export default homeSlice.reducer