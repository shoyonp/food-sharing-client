import React from "react";
import { Link } from "react-router-dom";

const FeaturedFoodCard = ({ food }) => {
  const { _id, foodName, foodImage, foodQuantity, foodStatus, expiredDate } =
    food;
  return (
    <>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transform transition duration-300 hover:scale-105 my-5">
        <img
          src={foodImage}
          alt="Food Image"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Name: {foodName}
          </h3>
          <p className="text-gray-600 mt-1">
            <span className="font-medium text-gray-700">Quantity: </span>
            {foodQuantity}
          </p>
          <p className="text-gray-600 mt-1">
            <span className="font-medium text-gray-700">Expired Date:</span>{" "}
            {expiredDate}
          </p>
          <span className="text-green-500 font-bold mr-2">{foodStatus}</span>
          <Link to={`/foods/${_id}`}>
            <button className=" mt-4 bg-orange-500 text-white px-4 py-2 rounded-md transform transition duration-300 hover:scale-110 hover:bg-orange-600">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FeaturedFoodCard;
