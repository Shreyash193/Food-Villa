import { useState,useEffect,useContext } from "react";
import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData} from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";


const Body=()=>{
  const[allRestaurants,setAllRestaurants]=useState([]);
  const [filteredRestaurants,setFilteredRestaurants]=useState([]);
  const [searchText,setSearchText] =useState("");
  const {user,setUser}= useContext(UserContext);

  useEffect(()=>{
    getRestaurants();

  },[]);


  async function getRestaurants() {
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING ");
    const json=await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }

  // const isOnline=useOnline();

  // if(!isOnline){
  //   return <h1>🔴Offline ,please check your internet connection🔴</h1>
  // }

  

  // if(filteredRestaurants?.length===0){
  //   return <h1>No Restaurant match your filter!</h1>
  // }
  
  if(!allRestaurants) return null;
    return allRestaurants?.length===0 ?(
    <Shimmer/>
  ):(
  // return(
      <>
      <div className="search-container p-5 bg-pink-50 my-5">
        <input 
        type="text"
        className="focus:bg-green-100 p-2 m-2"
        placeholder="search"
        value={searchText}
        onChange={(e)=>{ 
          setSearchText(e.target.value);
        }}
        />
        <button 
        className="p-2 m-2 bg-purple-200 rounded-md hover:bg-sky-700 " 
        onClick={()=>{
          //need to filter the data
          const data=filterData(searchText,allRestaurants);
          //update the state-restaurants
          setFilteredRestaurants(data);

        }}
        >Search</button>
        <input value={user.name} onChange={e=>setUser({
          name:e.target.value,
          email:"newemail@gmail.com",
        })}></input>
      </div>
      <div className="flex flex-wrap bg-orange-100 ">
        {
          filteredRestaurants.map(restaurant =>{
            return (
            <Link to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}>
            <RestaurantCard {...restaurant.info}
            
            />
            </Link>
            );
          })  
        } 
        
      </div>
      </>
      
    );
  }


  export default Body;