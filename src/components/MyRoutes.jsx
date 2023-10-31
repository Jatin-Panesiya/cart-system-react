import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Cart from "./Cart"
import InputData from "./InputData"

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/add-product" element={<InputData />} />
      </Routes>
    </div>
  )
}

export default MyRoutes