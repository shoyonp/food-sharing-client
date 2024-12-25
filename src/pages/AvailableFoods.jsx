import React, { useEffect, useState } from "react";
import FeaturedFoodCard from "../components/FeaturedFoodCard";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState('');
  // const handleSearch =(e)=>{
  //     const search = e.target.value
  //     console.log(search);
  // }

  useEffect(() => {
    fetch(`http://localhost:5000/foods?search=${search}&sort=${sort}`)
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, [search,sort]);
  return (
    <div>
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
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5">
        {foods.map((food) => (
          <FeaturedFoodCard key={food._id} food={food}></FeaturedFoodCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
