import { createSlice, nanoid } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
    name: 'home',
    initialState: [{ id: nanoid(), title: "Branded Nike Shoes", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D", price: "10$" },
    { id: nanoid(), title: "Branded T-Shirt", img: "https://assets.ajio.com/medias/sys_master/root/20230623/2urh/6494e7e042f9e729d782a8f3/-473Wx593H-464531848-navy-MODEL.jpg", price: "5$" }],

    reducers: {
        addToCart: (state, action) => {
            const { title, img, price } = action.payload
            state.push({ id: nanoid(), img: img, title: title, price: price })
        }

    }
})

export const { addToCart } = homeSlice.actions
export default homeSlice.reducer