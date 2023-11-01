import { useSelector } from "react-redux";
import { Link } from "react-router-dom"

const Header = () => {
    const {items} = useSelector((state) => state.cart)

    const itemslength = items?.length ;

    return (
        <div className="flex items-center gap-3 sm:gap-5 text-[14px] sm:text-xl px-2 fixed w-full sm:px-5 py-2 bg-gray-300 ">
            <Link className="hover:text-green-500" to="/">Home  </Link>
            <Link className="hover:text-green-500" to="cart">Cart  </Link>
            <Link className="hover:text-green-500" to="manage-product">Manage Product  </Link>
            <span className="cursor-pointer flex  px-2 sm:px-5 py-1" ><p className="text-xl">🛒</p> <p className="text-red-500 absolute pl-7 text-xl font-bold">{itemslength}</p> </span>
        </div>
    )
}

export default Header