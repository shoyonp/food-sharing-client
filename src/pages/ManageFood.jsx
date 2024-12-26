import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import UseTitle from "../components/UseTitle";
import { MdTipsAndUpdates } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";

const ManageFood = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  const axiosSecure = useAxiosSecure();
  UseTitle("Manage Food");
  //   useEffect(() => {
  //     fetch(`https://food-sharing-server-zeta.vercel.app/foods?email=${user?.email}`)
  //       .then((res) => res.json())
  //       .then((data) => setFoods(data));
  //   }, [user.email]);

  //   const handleDelete = (id) => {
  //     fetch(`https://food-sharing-server-zeta.vercel.app/foods/${id}`, {
  //       method: "DELETE",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         const oneFood = foods && foods?.find((f) => f._id !== id);
  //         if(data.deletedCount > 0){
  //             toast.success('Deleted success')
  //         }
  //         setFoods(oneFood);
  //         console.log(data);
  //       });
  //   };

  //  get data by email
  useEffect(() => {
    fetchAllFoods();
  }, [user]);

  const fetchAllFoods = async () => {
    const { data } = await axiosSecure.get(`/foods/${user?.email}`);
    setFoods(data);
  };

  //  delete a data
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://food-sharing-server-zeta.vercel.app/foods/${id}`
      );
      //   console.log(data);
      toast.success("Deletd successfully");
      fetchAllFoods();
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteFood = (id) => {
    toast((t) => (
      <div className="flex gap-3 items-center">
        <div>
          <p>Want to Delete?</p>
        </div>
        <div className="flex gap-3 items-center">
          <button
            className="bg-red-500 text-white px-3 py-1 rounded-md"
            onClick={() => {
              toast.dismiss(t.id);
              handleDelete(id);
            }}
          >
            Yes
          </button>
          <button
            className="bg-green-500 text-white px-3 py-1 rounded-md"
            onClick={() => toast.dismiss(t.id)}
          >
            No
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-11/12 mx-auto ">
          {/* head */}
          <thead className="bg-[#EDEDED] text-[#4B4B4B]">
            <tr>
              <th className="px-6 py-4 text-left font-semibold">
                Food Name & Location
              </th>
              <th className="px-6 py-4 text-left font-semibold">
                Additional Notes & Quantity
              </th>
              <th className="px-6 py-4 text-left font-semibold">
                Expired Date
              </th>
              <th className="px-6 py-4 text-center font-semibold">Actions</th>
            </tr>
          </thead>
          {foods?.map((food, idx) => (
            <tbody key={food._id}>
              {/* row 1 */}
              <tr className="border-b hover:bg-[#F7F7F7] transition duration-300">
                <td className="px-6 py-4 flex items-center gap-4">
                  <img
                    className="w-12 h-12 rounded-lg object-cover border"
                    src={food.foodImage}
                    alt="Food"
                  />
                  <div>
                    <p className="text-sm font-semibold text-[#4B4B4B]">
                      {food.foodName}
                    </p>
                    <p className="text-sm text-[#737373]">
                      {food.pickupLocation}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4 text-[#4B4B4B]">
                  <p className="text-sm">{food.additionalNotes}</p>
                  <p className="text-sm text-[#737373]">{food.foodQuantity}</p>
                </td>
                <td className="px-6 py-4 text-[#4B4B4B]">{food.expiredDate}</td>
                <td className="px-6 py-4 text-center gap-3">
                  <Link to={`/updateFood/${food._id}`}>
                    <button className="bg-blue-500 hover:bg-blue-600 p-2 rounded-full text-white">
                      <MdTipsAndUpdates />
                    </button>
                  </Link>

                  <button
                    onClick={() => deleteFood(food._id)}
                    className=" bg-red-500 hover:bg-red-600 p-2 rounded-full ml-0 mt-2 md:ml-2 text-white"
                  >
                    <RiDeleteBin6Fill />
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ManageFood;
