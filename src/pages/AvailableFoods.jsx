import React, { useEffect, useState } from "react";
import FeaturedFoodCard from "../components/FeaturedFoodCard";
import UseTitle from "../components/UseTitle";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [layout, setLayout] = useState(true);
  const [availableData, setAvailableData] = useState([]);
  UseTitle("Available Foods");
  //   console.log(foods);
  const toggleLayout = () => {
    setLayout(!layout);
  };

  useEffect(() => {
    fetch(
      `https://food-sharing-server-zeta.vercel.app/foods?search=${search}&sort=${sort}`
    )
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, [search, sort]);
  useEffect(() => {
    const filterFoods = foods?.filter(
      (food) => food.foodStatus === "available"
    );
    setAvailableData(filterFoods);
  }, [foods]);
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex mx-auto justify-center">
        <div>
          <input
            className="border border-red-400 w-full mx-auto"
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            name=""
            id=""
          />
        </div>
        <div>
          <select name="" id="" onChange={(e) => setSort(e.target.value)}>
            <option value="">Sort By Expired Date</option>
            <option value="dsc">Descending Order</option>
            <option value="asc">Ascending Order</option>
          </select>
        </div>
        <div>
          {" "}
          <button
            onClick={toggleLayout}
            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Change layout
          </button>
        </div>
      </div>
      <div
        className={` grid grid-cols-1 md:grid-cols-2 mx-auto gap-5 ${
          layout ? "lg:grid-cols-3" : "lg:grid-cols-2"
        } `}
      >
        {[...availableData]?.reverse()?.map((food) => (
          <FeaturedFoodCard key={food._id} food={food}></FeaturedFoodCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
