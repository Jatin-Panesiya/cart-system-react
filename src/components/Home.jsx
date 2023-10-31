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

            <div className="flex gap-5 py-28 flex-wrap sm:justify-normal justify-center">
                {
                    homeData.map((data) => {
                        return (
                            <div key={data.id} >
                                <img src={data.img} alt={data.title} className="w-64 h-64  rounded" />
                                <div className="flex items-center gap-5 justify-center text-xl">
                                    <h3>{data.title}</h3>
                                    <p>{data.price}</p>
                                </div>
                                <div className="flex items-center gap-5 justify-center my-2">
                                    <button onClick={() => handleCart(data.id)} className="bg-blue-500 rounded px-5 py-1 text-white">Add to Cart</button>
                                </div>
                            </div>

                        )
                    })
                }

            </div>

    )
}

export default Home