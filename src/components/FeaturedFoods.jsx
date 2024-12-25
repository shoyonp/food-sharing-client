import FeaturedFoodCard from "./FeaturedFoodCard";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const FeaturedFoods = () => {
//   const [foods, setFoods] = useState([]);

//   useEffect(() => {
//     fetchAllfoods();
//   }, []);

//   const fetchAllfoods = async () => {
//     const { data } = await axios.get("http://localhost:5000/foods");
//     setFoods(data);
//   };

  const { data:foods, isLoading } = useQuery({
    queryKey: ["foods"],
    queryFn: async () => {
      const { data } = await axios.get("http://localhost:5000/foods");
      return data;
    },
  });

  if (isLoading) {
    return (
      <span className="loading loading-dots loading-lg mx-auto flex justify-center  min-h-screen"></span>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-5">
        {foods.slice(0, 6).map((food) => (
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
