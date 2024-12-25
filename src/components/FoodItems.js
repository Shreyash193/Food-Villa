import { IMG_CDN_URL } from "../constants";

const FoodItems = ({ name, description, price, cloudinaryImageId }) => {
  console.log(IMG_CDN_URL + cloudinaryImageId); // Check the URL in console

  return (
    <div className="w-56 h-140 p-2 m-2 shadow-sm bg-pink-100">
      <img 
        src={cloudinaryImageId ? IMG_CDN_URL + cloudinaryImageId : "fallback-image-url.jpg"} 
        alt={name} 
        className="w-full h-32 object-cover"
      />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3 className="break-words">{description}</h3>
      <h4>{price / 100} rupees</h4>
    </div>
  );
};

export default FoodItems;
