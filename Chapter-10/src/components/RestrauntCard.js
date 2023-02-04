import { IMG_CDN_URL } from "../config";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating
}) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50 align-bottom ">
      <img src={ IMG_CDN_URL
          +cloudinaryImageId} />
      <h2 className="font-bold xl
      ">{name}</h2>
      <h3>{cuisines.join(" , ")}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestrauntCard;