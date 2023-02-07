import { useContext } from "react";
import { IMG_CDN_URL } from "../config";
import UserContext from "../utils/UserContext";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  
}) => {
  const {user} = useContext(UserContext);
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50 align-bottom ">
      <img src={ IMG_CDN_URL
          +cloudinaryImageId} />
      <h2 className="font-bold xl
      ">{name}</h2>
      <h3>{cuisines.join(" , ")}</h3>
      <h4>{avgRating} stars</h4>
      <h4 className = "font-bold hover:bg-purple-150">User:{user.name}</h4>
      <h5 className="font-bold">{user.name}</h5>
    </div>
  );
};

export default RestrauntCard;