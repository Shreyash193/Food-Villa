import { useDispatch, useSelector } from "react-redux";
import FoodItems from "./FoodItems";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    //const cartItems=useSelector(store=>store)
    //both will work but by selecting specific part of store performance is increased
    const cartItems =useSelector(store=>store.cart.items);

    const dispatch=useDispatch();

    const handleClearCart =()=>{
        dispatch(clearCart());
    };

    return <div>
        <h1 className="font-bold text-3xl">
            Cart items -{cartItems.length}
        </h1>
        <button 
        className="bg-green-100 p-2 m-5" onClick={()=>handleClearCart()}
        >Clear Cart
        </button>
        <div className="flex flex-wrap">
        {cartItems.map(item=>(
            <FoodItems key={item.id}{...item}/>))}
        </div>
    

    </div>
}

export default Cart;