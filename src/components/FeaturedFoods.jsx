import FeaturedFoodCard from "./FeaturedFoodCard";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

const FeaturedFoods = () => {
  //   const [foods, setFoods] = useState([]);
  const [availableData, setAvailableData] = useState([]);
  //   useEffect(() => {
  //     fetchAllfoods();
  //   }, []);

  //   const fetchAllfoods = async () => {
  //     const { data } = await axios.get("http://localhost:5000/foods");
  //     setFoods(data);
  //   };

  // us
  const { data: foods, isLoading } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:5000/foods");
      return data;
    },
  });
  useEffect(() => {
    const filterFoods = foods.filter((food) => food.foodStatus === "available");
    setAvailableData(filterFoods);
  }, [foods]);
  if (isLoading) {
    return (
      <span className="loading loading-dots loading-lg mx-auto flex justify-center  min-h-screen"></span>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5">
        {availableData
          ?.slice(0, 6)
          .reverse()
          ?.map((food) => (
            <FeaturedFoodCard key={food._id} food={food}></FeaturedFoodCard>
          ))}
      </div>
      <Link to="/availableFood">
        <button className="btn btn-warning">Show All</button>
      </Link>
    </div>
  );
};

export default FeaturedFoods;
