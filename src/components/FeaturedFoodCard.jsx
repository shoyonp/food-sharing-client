import React from "react";
import { Link } from "react-router-dom";

const FeaturedFoodCard = ({ food }) => {
  const {_id, foodName, foodImage, foodQuantity, foodStatus, expiredDate } =
    food;
  return (
    <div className="card bg-base-100 shadow-xl">
  <figure>
    <img
    className="h-80 w-full object-cover"
      src={foodImage}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {foodName}
      <div className="badge badge-secondary">{foodStatus}</div>
    </h2>
    <p>{foodQuantity}</p>
    <p>{expiredDate}</p>
    <div className="card-actions justify-end">
     <Link to={`/foods/${_id}`}><button className="btn btn-warning">View Details</button></Link>
    </div>
  </div>
</div>
  );
};

export default FeaturedFoodCard;
