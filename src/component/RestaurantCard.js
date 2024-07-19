import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) =>{
    const { resdata, } = props;

    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime, sla} = resdata?.info;
    return (
        <div className="res-card">
            <img
             className="res-logo"
             alt="burger-logo" 
             src={ CDN_URL+ cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;