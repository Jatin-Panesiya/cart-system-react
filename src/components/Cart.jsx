import { useSelector, useDispatch } from "react-redux"
import { removeItemsFromCart, setTotal } from "../store/cartSlice";
import { useEffect } from "react";
const Cart = () => {
  const {items,totalPrice} = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  const handleRemove = (id) => {
    dispatch(removeItemsFromCart(id));
  }
  useEffect(()=>{
    dispatch(setTotal(items))
  },[items,dispatch])
  
  return (
    <div>
      {items.length > 0 ?
        <div className="grid gap-5 px-3 py-20">
          {
            items.map((items) => {
              return (
                <div key={items.id} className="flex items-center border p-3 flex-wrap justify-between w-full">
                  <img src={items.img} alt={items.title} className="w-20 h-20  rounded" />

                  <h3 className="text-xl">{items.title}</h3>
                  <p className="text-green-500 font-bold text-xl">{items.price}</p>

                  <div className="flex items-center gap-5 justify-center my-2">
                    <button className="bg-red-500 rounded px-5 py-1 text-white" onClick={() => handleRemove(items.id)}>Remove</button>
                  </div>
                </div>

              )
            })
          }
        </div> : <div className="py-20"> <h1 className="bg-slate-300 text-center py-5 text-xl ">Cart is Empty</h1> </div>}
        <h1>Total Price is : ${totalPrice}</h1>
    </div>
  )
}

export default Cart