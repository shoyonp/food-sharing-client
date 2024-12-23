import React, { useEffect, useState } from 'react';
import FeaturedFoodCard from '../components/FeaturedFoodCard';

const AvailableFoods = () => {

    const [foods, setFoods] = useState([]);

    const handleSearch =(e)=>{
        const search = e.target.value
        console.log(search);
    }
    
      useEffect(() => {
        fetch("http://localhost:5000/foods")
          .then((res) => res.json())
          .then((data) => setFoods(data));
      }, []);
    return (
        <div>
            <input className='border border-red-400 w-1/3 ms-auto' onChange={handleSearch} type="text" name="" id="" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5">
        {foods.map((food) => (
          <FeaturedFoodCard key={food._id} food={food}></FeaturedFoodCard>
        ))}
      </div>
    </div>
    );
};

export default AvailableFoods;