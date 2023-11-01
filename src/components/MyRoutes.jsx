import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Cart from "./Cart"
import InputData from "./InputData"
import ManageProduct from "./ManageProduct"

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="manage-product/add-product" element={<InputData />} />
        <Route path="/manage-product" element={<ManageProduct />} />
      </Routes>
    </div>
  )
}

export default MyRoutes