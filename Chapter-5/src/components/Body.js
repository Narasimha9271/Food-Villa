import { restaurentList } from "../config";
import RestrauntCard from "./RestrauntCard";
import { useState } from "react";

{/*
function filterData(searchText,restaurants){
	
	const filterdata = restaurants.filter((restaurant) =>{
    return restaurant.data.name.includes(searchText);
})}
*/}

	

const filterData = (searchText,restaurants) => {
	return restaurants.filter(restaurant =>
		restaurant.data.name.toLowerCase().includes
		(searchText.toLowerCase()));
} 


const Body = () =>{
	//creating a local variable
	const [restaurants,setRestaurants]= useState(restaurentList);
	const [searchText , setSearchText] =useState("") ;
	
	return (
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
				console.log(restaurants)
			}
			<button className="search-btn"
        onClick={() =>{
				    //need to filter the data
            const data = filterData(searchText,restaurants);
				    //Update the state(restaurants)
            setRestaurants(data);
			}}>
				Search
				</button>
		</div>
		<div className="restaurentlist">
        {
					restaurants.map((restaurant) =>{
						return (
							<RestrauntCard {...restaurant.data} key={restaurant.data.id}/>
					);
				})}
		</div>
		</>
	);
};

export default Body;

