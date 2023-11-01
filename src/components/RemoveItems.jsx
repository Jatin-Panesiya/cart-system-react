import { useSelector,useDispatch } from "react-redux"
import { removeItem } from "../store/homeSlice";

const RemoveItems = () => {
    const items = useSelector((state) => state.home)
    const dispatch = useDispatch();


    const  handleRemove = (id)=>{
        dispatch(removeItem(id))
    }
    return (
        <div>
        <h1 className="text-center font-bold text-xl py-2">Product List</h1>
            {
                items.length > 0 ?
                    items.map(({ id, img, title, price }) => {
                        return (
                            <div key={id} className="flex items-center justify-between border responsive p-2 flex-wrap">
                                <img src={img} alt="img" className="w-32 h-32"    />
                                <div className="grid sm:flex text-center items-center px-1 gap-3  ">
                                <p>{title}</p>
                                <p className="text-green-500 font-bold">${price}</p>
                                </div>

                                <button onClick={()=>handleRemove(id)}  className={`bg-red-500  rounded px-5 py-1 text-white sm:flex hidden`}>Remove</button>
                                <button onClick={()=>handleRemove(id)}  className={`bg-red-500  rounded px-5 py-1 text-white sm:hidden flex`}>X</button>

                            </div>
                        )
                    })
                    : null
            }
        </div>

    )
}

export default RemoveItems