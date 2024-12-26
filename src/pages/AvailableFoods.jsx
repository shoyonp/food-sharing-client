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
    <div className="w-11/12 mx-auto mt-4">
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-5">
        {/* drop down */}
        <div className="dropdown dropdown-bottom">
          <select
            name=""
            id=""
            onChange={(e) => setSort(e.target.value)}
            className="border p-3 rounded-lg"
          >
            <option value="">Sort By Expired Date</option>
            <option value="dsc">Descending Order</option>
            <option value="asc">Ascending Order</option>
          </select>
        </div>
        {/* search box */}
        <div>
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="input input-bordered w-full md:w-auto"
          />
        </div>
        {/* toggle */}
        <div>
          {" "}
          <button
            onClick={toggleLayout}
            className="px-4 py-2 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 text-white 
          hover:from-gray-500 hover:via-gray-600 hover:to-gray-700 rounded-md transform transition duration-300 hover:scale-110"
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
