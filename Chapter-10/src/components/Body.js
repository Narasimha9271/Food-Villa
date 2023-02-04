import { restaurentList } from "./../config";
import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
{
  /*
function filterData(searchText,restaurants){
	
	const filterdata = restaurants.filter((restaurant) =>{
    return restaurant.data.name.includes(searchText);
})}
*/
}


const Body = () => {
  //creating a local state variable
  //keep a copy of all restaurents
  const [allRestaurents, setAllRestaurents] = useState([]);
  const [filteredrestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  //empty dependency array =>call back functon will be called once after render
  //dependency array [searchText] =. once after initial render + everytime after render(for every searchText changes)
  useEffect(() => {
    // API Call
    getRestaurents();
  }, []);

  async function getRestaurents() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.8493998&lng=81.5322149&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //console.log(json);
    //to put api data on UI
    // method 1 - setRestaurants(json.data.cards[2].data.data.cards);
    //method-2  OPTIONAL CHAINING
    setAllRestaurents(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

//  const isOnline = useOnline();

//  if(!isOnline) {
//     return <h1> 🔴Offline , Please Check your internet connection</h1>
//   }

  //not render component(early return)
  if (!allRestaurents) return null;

  {
    /*if(filteredrestaurants?.length === 0) 
   return <h1>No restaurent match your filter!!</h1>; */
  }

  //Conditional Rendering
  //if restaurent is empty =. it should load shimmer UI
  //if restaurent has data =. it loads actual data UI
  return allRestaurents?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="focus:bg-green-300"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            // e.target.value  means-> Whatever u write in input
            setSearchText(e.target.value);
          }}
        />
        {
          //<h1>{searchInput}</h1>
          //console.log(restaurants)
        }
        <button
          className=" p-1 m-2  bg-purple-900 hover:bg-gray-500 text-white rounded-md "
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurents);
            //Update the state(restaurants)
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
         {/* You have to write logic for NO restraunt fount here */}
        {filteredrestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurent/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestrauntCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
