import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const ManageFood = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/foods?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, [user.email]);

  console.log(foods);

  return (
    <div>
      manage food:{foods.length}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Food Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          {foods?.map((food) => (
            <tbody key={food._id}>
              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex items-center gap-3">
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
                  <button className="btn btn-ghost btn-xs">Update</button>
                  <button className="btn btn-ghost btn-xs">Delete</button>
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
