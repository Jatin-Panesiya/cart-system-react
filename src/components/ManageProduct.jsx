import { Link } from "react-router-dom";
import InputData from "./InputData";



const ManageProduct = ()=>{
        return(
            <div className="py-20">
            <Link to={'add-product'} >Add Product</Link>
            </div>
        )
}

export default ManageProduct;