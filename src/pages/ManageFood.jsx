import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ManageFood = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  const axiosSecure = useAxiosSecure();

  //   useEffect(() => {
  //     fetch(`http://localhost:5000/foods?email=${user?.email}`)
  //       .then((res) => res.json())
  //       .then((data) => setFoods(data));
  //   }, [user.email]);

  //   const handleDelete = (id) => {
  //     fetch(`http://localhost:5000/foods/${id}`, {
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
      const { data } = await axios.delete(`http://localhost:5000/foods/${id}`);
      console.log(data);
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

  console.log(foods);
  return (
    <div>
      manage food:{foods?.length}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Food Name & Location</th>
              <th>Additional Notes & Quantity</th>
              <th>Expired Date</th>
              <th></th>
            </tr>
          </thead>
          {foods?.map((food, idx) => (
            <tbody key={food._id}>
              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
                    <span>{idx + 1}</span>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={food.foodImage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{food.foodName}</div>
                      <div className="text-sm opacity-50">
                        {food.pickupLocation}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {food.additionalNotes}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {food.foodQuantity}
                  </span>
                </td>
                <td>{food.expiredDate}</td>
                <th>
                  <Link to={`/updateFood/${food._id}`}>
                    {" "}
                    <button className="btn btn-ghost btn-xs">Update</button>
                  </Link>
                  <button
                    onClick={() => deleteFood(food._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    Delete
                  </button>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ManageFood;
