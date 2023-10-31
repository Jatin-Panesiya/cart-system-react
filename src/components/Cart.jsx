import { useSelector, useDispatch } from "react-redux"
import { removeItemsFromCart } from "../store/cartSlice";


const Cart = () => {
  const data = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  const handleRemove = (id) => {
    dispatch(removeItemsFromCart(id));
  }
  return (
    <div>
      {data.length > 0 ?
        <div className="flex gap-5 py-20 flex-wrap sm:justify-normal justify-center">
          {
            data.map((data) => {
              return (
                <div key={data.id} className="w-64">
                  <img src={data.img} alt={data.title} className="w-64 h-64  rounded" />
                  <div className="flex items-center gap-5 justify-center text-xl">
                    <h3>{data.title}</h3>
                    <p>{data.price}</p>
                  </div>
                  <div className="flex items-center gap-5 justify-center my-2">
                    <button className="bg-green-500 rounded px-5 py-1 text-white">Buy</button>
                    <button onClick={() => handleRemove(data.id)}>Remove</button>
                  </div>
                </div>

              )
            })
          }
        </div> : <div className="py-20"> <h1 className="bg-slate-300 text-center py-5 text-xl ">Cart is Empty</h1> </div>}
    </div>
  )
}

export default Cart