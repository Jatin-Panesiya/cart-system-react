import { useDispatch, useSelector } from "react-redux"
import { addItemsToCart } from "../store/cartSlice"

const Home = () => {

    const dispatch = useDispatch()
    const homeData = useSelector((state) => state.home)

    const handleCart = (id) => {
        const item = homeData.find((e) => e.id === id)
        dispatch(addItemsToCart(item))
    }
    return (
        homeData.length > 0 ?
            <div className="flex gap-5 py-12 flex-wrap sm:justify-normal justify-center">
                {
                    homeData.map((data) => {
                        return (
                            <div key={data.id} >
                                <img src={data.img} alt={data.title} className="w-64 h-64  rounded" />
                                <div className="flex items-center gap-5 justify-center text-xl">
                                    <h3>{data.title}</h3>
                                    <p>{data.price}$</p>
                                </div>
                                <div className="flex items-center gap-5 justify-center my-2">
                                    <button onClick={() => handleCart(data.id)} className="bg-blue-500 rounded px-5 py-1 text-white">Add to Cart</button>
                                </div>
                            </div>

                        )
                    })
                }

            </div> :

            <div className="py-20"> <h1 className="bg-slate-300 text-center py-5 text-xl ">No Items in Shop</h1> </div>

    )
}

export default Home