import { IMG_CDN_URL } from "../constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard=({name,cuisines,avgRating,cloudinaryImageId})=>{
  
    const {user}=useContext(UserContext);
    return (
      <div className="w-56 h-140 p-2 m-2 shadow-sm bg-pink-100">
        <img src={IMG_CDN_URL +
          cloudinaryImageId
        }
        />
        <h2 className="font-bold text-xl">{name}</h2>
        <h3 className="break-words">{cuisines.join(",")}</h3>
        <h4>{avgRating} stars </h4>
        <h5 className="front-bold">{user.name}-{user.email}</h5>
      </div>
    );
  
  }

  export default RestaurantCard;
  
