import { useEffect, useState } from "react";
import FeaturedFoodCard from "./FeaturedFoodCard";
import { Link } from "react-router-dom";

const FeaturedFoods = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5">
        {foods.slice(0, 6).map((food) => (
          <FeaturedFoodCard key={food._id} food={food}></FeaturedFoodCard>
        ))}
      </div>
      <Link to="/availableFood"><button className="btn btn-warning">Show All</button></Link>
    </div>
  );
};

export default FeaturedFoods;
