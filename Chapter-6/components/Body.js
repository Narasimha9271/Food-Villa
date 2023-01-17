import { restaurentList } from "../config";
import RestrauntCard from "./RestrauntCard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";

{/*
function filterData(searchText,restaurants){
	
	const filterdata = restaurants.filter((restaurant) =>{
    return restaurant.data.name.includes(searchText);
})}
*/}

const filterData = (searchText,restaurants) => {
	return restaurants.filter(restaurant =>
		restaurant?.data?.name?.toLowerCase()?.includes
		(searchText.toLowerCase()));
} 


const Body = () =>{
	//creating a local state variable
	//keep a copy of all restaurents
	const [allrestaurents,setAllRestaurents] = useState([]);
	const [filteredrestaurants,setFilteredRestaurants]= useState([]);
	const [searchText , setSearchText] =useState("") ;
	
	//empty dependency array =>call back functon will be called once after render
	//dependency array [searchText] =. once after initial render + everytime after render(for every searchText changes)
	useEffect(() => {
		// API Call
		getRestaurents();
	},[]); 

  async function getRestaurents() {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.7624554&lng=78.556148&page_type=DESKTOP_WEB_LISTING");
		const json = await data.json();
    console.log(json);	
		//to put api data on UI
		// method 1 - setRestaurants(json.data.cards[2].data.data.cards);
    //method-2  OPTIONAL CHAINING 
		setAllRestaurents(json?.data?.cards[2]?.data?.data?.cards);
		setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);

	}

	console.log("render");

	//not render component(early return)
  if(!allrestaurents) return null;

	if(filteredrestaurants?.length === 0) 
        return <h1>No restaurent match your filte!!r</h1>;
	
  //Conditional Rendering
	//if restaurent is empty =. it should load shimmer UI
	//if restaurent has data =. it loads actual data UI
	return (allrestaurents.length === 0) ? 
      <Shimmer/> : (
		<>
		<div className="search-container">
			<input 
          type="text" 
					className="search-input" 
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
			<button className="search-btn"
        onClick={() =>{
				    //need to filter the data
            const data = filterData(searchText,allrestaurents);
				    //Update the state(restaurants)
            setFilteredRestaurants(data);
			}}>
				Search
				</button>
		</div>
		<div className="restaurentlist">
        {filteredrestaurants.map((restaurant) =>{
						return (
							<RestrauntCard {...restaurant.data} key={restaurant.data.id}/>
					);
				})}
		</div>
		</>
	);
};

export default Body;

