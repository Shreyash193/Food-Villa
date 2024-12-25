
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [restaurant, setRestaurant] = useState(null);

    const dispatch=useDispatch();

    const addFoodItem=(item)=>{
        dispatch(addItem(item));
    };

    useEffect(() => {
        getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=${resId}&submitAction=ENTER`);
        const json = await data.json();
        console.log(json.data);
        setRestaurant(json.data);
    }

    if (!restaurant) {
        return <Shimmer />;
    }
// Extract menu items as objects, not just names
const menuItems = restaurant.cards
    .find(card => card.groupedCard?.cardGroupMap?.REGULAR)
    .groupedCard.cardGroupMap.REGULAR.cards
    .filter(cardObj => cardObj.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    .flatMap(cardObj => cardObj.card.card.itemCards.map(item => item.card.info));

return (
    <div className="flex space-x-10">
        <div>
            <h1>Restaurant id: {resId}</h1>
            <h1>{restaurant?.cards?.[0]?.card?.card?.text || "Loading..."}</h1>
            <img
                className="size-60"
                src={IMG_CDN_URL + restaurant?.cards?.[2]?.card?.card?.info?.cloudinaryImageId}
                alt="Restaurant"
            />
            <h3>avgRating: {restaurant?.cards[2]?.card?.card?.info?.avgRating} stars</h3>
            <h3>areaName: {restaurant?.cards[2]?.card?.card?.info?.areaName}</h3>
            <h3>costForTwo: {restaurant?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
        </div>
        <div>
            <h1 className="font-bold">Menu</h1>
            <ul>
                {menuItems.map((item, index) => (
                    <li className="" key={index}>
                        {item.name} - 
                        <button className="p-1 bg-green-100" onClick={() => addFoodItem(item)}>Add</button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);
};
export default RestaurantMenu;

//     // Extract menu items
//     const menuItems = restaurant.cards
//         .find(card => card.groupedCard?.cardGroupMap?.REGULAR)
//         .groupedCard.cardGroupMap.REGULAR.cards
//         .filter(cardObj => cardObj.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
//         .flatMap(cardObj => cardObj.card.card.itemCards.map(item => item.card.info.name));

//     return (
//         <div className="flex space-x-10">
//             <div>
//                 <h1>Restaurant id: {resId}</h1>
//                 <h1>{restaurant?.cards?.[0]?.card?.card?.text || "Loading..."}</h1>
//                 <img
//                     className="size-60"
//                     src={IMG_CDN_URL + restaurant?.cards?.[2]?.card?.card?.info?.cloudinaryImageId}
//                     alt="Restaurant"
//                 />
//                 <h3>avgRating: {restaurant?.cards[2]?.card?.card?.info?.avgRating} stars</h3>
//                 <h3>areaName: {restaurant?.cards[2]?.card?.card?.info?.areaName}</h3>
//                 <h3>costForTwo: {restaurant?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
//             </div>
//             <div>
//                 <h1 className="font-bold">Menu</h1>
//                 <ul>
//                     {menuItems.map((name, index) => (
//                         <li className="" key={index}>{name}- <button className="p-1 bg-green-100" onClick={()=>addFoodItem(item)}>Add</button></li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };












// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { IMG_CDN_URL } from "../constants";
// import Shimmer from "./Shimmer";
// import useRestaurant from "../utils/useRestaurant";

// const RestaurantMenu = () => {
//   const { resId } = useParams(); // Get restaurant ID from route parameters
//   //const [restaurant, setRestaurant] = useState(null); // 
//   const restaurant=useRestaurant(resId);

//   if (!restaurant) {
//     return <Shimmer />;
//   }

//   // Destructure data for easier access in JSX
//   const { name, cards } = restaurant;
//   const restaurantInfo = cards?.[2]?.card?.card?.info || {};

//   return (
//     <div className="restaurant-info">
//       <div>
//       <h1>Restaurant ID: {resId}</h1>
//       <h2>{cards?.[0]?.card?.card?.text || "No description available"}</h2>
//       <img className="size-60"
//         src={IMG_CDN_URL + (restaurantInfo.cloudinaryImageId || "default-image.jpg")}
//         alt={restaurantInfo.name || "Restaurant image"}
//       />
//       <h3>Average Rating: {restaurantInfo.avgRating || "N/A"}</h3>
//       <h3>Area: {restaurantInfo.areaName || "Area not specified"}</h3>
//     </div>
//     <div>
//       <h1>Menu</h1>
//       <ul>
//         {Object.values(cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.carousel).map((item) =>{
//           <li key={item.id}>{item.name}</li>
//         })}
//       </ul>
//     </div>
//     </div>
    
//   );
// };

// export default RestaurantMenu;
