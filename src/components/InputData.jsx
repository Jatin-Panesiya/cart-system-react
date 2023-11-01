import { nanoid } from "@reduxjs/toolkit"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "../store/homeSlice"

const InputData = () => {
    const [inputData, setInputdata] = useState({ title: "", img: "", price: "" })
    const dispatch = useDispatch()

    const handleInput = (e) => {
        setInputdata({ ...inputData, [e.target.name]: e.target.value })
    }
    const handleAdd = () => {
        if (inputData.title !== "")
            dispatch(addToCart(inputData))
        setInputdata({ id: nanoid(), title: "", img: "", price: "" });
    }

    return (
        <div className="py-0 sm:py-10 ">
        <h1 className="text-center py-2 font-bold text-xl">Add Items</h1>
            <div className=" bg-green-400 py-5  m-auto  sm:px-10 rounded-xl mx-5 ">
                <div className="grid sm:flex flex-wrap justify-center items-center">
                    <input type="text" value={inputData.title} name="title" onChange={handleInput} placeholder="Enter Product Name " className="border border-black m-2 px-5 rounded py-1" />
                    <input type="text" value={inputData.img} name="img" onChange={handleInput} placeholder="Enter Image Link " className="border border-black m-2 px-5 rounded py-1" />
                    <input type="text" value={inputData.price} name="price" onChange={handleInput} placeholder="Enter Price " className="border border-black m-2 px-5 rounded py-1" />
                    <button onClick={handleAdd} className="bg-blue-500 text-white px-5 mx-2 rounded py-1">Add</button>
                </div>

            </div>
        </div>
    )
}

export default InputData