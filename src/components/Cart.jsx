import { useSelector, useDispatch } from "react-redux"
import { removeItemsFromCart, setTotal } from "../store/cartSlice";
import { useEffect } from "react";

const Cart = () => {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  const handleRemove = (id) => {
    dispatch(removeItemsFromCart(id));
  }
  
  useEffect(() => {
    dispatch(setTotal(items))
  }, [items,dispatch])

  return (
    <div>
    
    {items.length > 0 ?
        <div className="grid gap-5 px-3 py-20">
          {
            items.map((items) => {
              return (
                <div key={items.id} className="flex responsive items-center border sm:p-3 p-1  justify-between w-full ">
                  <div className="flex items-center gap-5 justify-center">
                    <img src={items.img} alt={items.title} className="w-20 h-20  rounded" />
                    <div className="grid sm:flex items-center gap-0 sm:gap-5">
                      <h3 className="text-[17px] sm:text-lg md:text-xl">{items.title}</h3>
                      <p className="text-green-500 font-bold text-[17px] sm:text-lg md:text-xl text-center">${items.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 justify-center my-2">
                    <button className={`bg-red-500 sm:flex hidden  rounded px-5 py-1 text-white`} onClick={() => handleRemove(items.id)}>Remove</button>
                    <button className={`bg-red-500 sm:hidden flex  rounded px-5 py-1 text-white`} onClick={() => handleRemove(items.id)}>X</button>
                  </div>
                </div>

              )
            })
          }
        </div> : <div className="py-20"> <h1 className="bg-slate-300 text-center py-5 text-xl ">Cart is Empty</h1> </div>}

      <div className="flex justify-between items-center bg-green-300 px-5  font-semibold py-3">
        <h1 >Total Price is : ${totalPrice}</h1>
        <button className="bg-blue-500 px-5 py-0.5 rounded text-white">Pay Now</button>
      </div>
    </div>
  )
}

export default Cart