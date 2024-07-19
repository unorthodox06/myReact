import resList from "../utils/mockCode";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockCode";
import { useState } from "react";



const Body = () =>{

    const [listOfRestaurant, setListOfRes] = useState(resList);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filtering = listOfRestaurant.filter((res) =>
                        res.info.avgRating > 4
                    );
                    setListOfRes(filtering)
                }}
                >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {/* below these are the props of the componenets */}
            {/* <RestaurantCard resdata = {resList[0]}/>   
            <RestaurantCard resdata = {resList[1]}/>    */}
            {
                listOfRestaurant.map((restaurant) => (
                    <RestaurantCard keys = {restaurant.info.id} resdata = {restaurant}/>
                ))
            }
              
            </div>
        </div>
    
    );
}

export default Body;