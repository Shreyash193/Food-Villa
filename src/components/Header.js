import { useEffect, useState,useContext } from "react";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import useAuth from "../utils/useAuth";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../utils/store";


const LogedInUser=()=>{
  //API call to check authentication
  return false;
};

export const Title=()=>(
  <a href="/">
 <img data-testid="Logo"
 className="h-28 p-2" 
 alt="logo" src={Logo}/>
 </a> 
 );


 


const Header=()=>{
   
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const isOnline = useOnline();

  const {user}=useContext(UserContext);

  const cartItems =useSelector(store=>store.cart.items);

 
  
  

  return     (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <Title/>
      
      <div className="nav-items ">
        <ul class="flex py-10 ">
          <Link to="/"  class="px-2">
          <li>Home</li>
          </Link>
          <Link to="/about" class="px-2"> 
          <li>About</li>
          </Link>
          <Link to="/contact" class="px-2"> 
          <li>Contact</li>
          </Link>
          <Link to="/instamart" class="px-2">
          <li>Instamart</li>
          </Link>
          <Link to="/cart" class="px-2">
          <li>Cart-{cartItems.length} items </li>
          </Link>
        </ul>
      </div>
      <h1 >{isOnline? '✅' :'🔴'}</h1>
      <span className="p-10 font-bold text-red-900">{user.name}</span>
      {
         isLoggedIn ? <button onClick={()=>setIsLoggedIn(false)}>Logout</button> :<button onClick={()=>setIsLoggedIn(true)}>Login</button> 
      }
      
      </div>
     );
 };

 export default Header;