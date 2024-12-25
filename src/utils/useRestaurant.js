import { useState,useEffect } from "react";

const useRestaurant=(resId)=>{
  const [restaurant,setRestaurant]=useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, [resId]);

  // Fetch restaurant info based on resId
  async function getRestaurantInfo() {
    try {
      const data = await fetch(
        `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=${resId}&submitAction=ENTER`
      );
      const json = await data.json();
      console.log(json.data);
      setRestaurant(json.data); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching restaurant info:", error);
    }
  }
  return restaurant;
};

export default useRestaurant;  