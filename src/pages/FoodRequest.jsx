import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import UseTitle from "../components/UseTitle";

const FoodRequest = () => {
  const [foodRequests, setFoodRequests] = useState([]);
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  UseTitle("My Request");
  useEffect(() => {
    fetchAllFoodsRequests();
  }, [user]);

  const fetchAllFoodsRequests = async () => {
    const { data } = await axiosSecure.get(`/my-request/${user?.email}`);
    setFoodRequests(data);
    // console.log(foodRequests);
  };
  return (
    <>
      <div className="container mx-auto px-4 py-8 w-screen  md:w-11/12 mt-20">
        <div className="overflow-x-hidden no-scrollbar">
          <table className="min-w-full  border-collapse border border-gray-300 rounded-lg shadow-md bg-white">
            <thead className="bg-gray-100 text-gray-600 uppercase text-sm">
              <tr>
                <th className="px-6 py-4 border border-gray-300 text-left">
                  #
                </th>
                <th className="px-6 py-4 border border-gray-300 text-left">
                  Donar Name
                </th>
                <th className="px-6 py-4 border border-gray-300 text-left">
                  Pickup Location
                </th>
                <th className="px-6 py-4 border border-gray-300 text-left">
                  Expire Date
                </th>
                <th className="px-6 py-4 border border-gray-300 text-left">
                  Request Date
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm">
              {foodRequests?.map((request, idx) => (
                <tr
                  key={request._id}
                  className=" hover:bg-gray-100 transition-transform duration-300 transform hover:scale-105"
                >
                  <td className="px-6 py-4 border border-gray-300">
                    {idx + 1}
                  </td>
                  <td className="px-6 py-4 border border-gray-300">
                    {request?.donarName}
                  </td>
                  <td className="px-6 py-4 border border-gray-300">
                    {request?.pickupLocation}
                  </td>
                  <td className="px-6 py-4 border border-gray-300">
                    {request?.expiredDate}
                  </td>
                  <td className="px-6 py-4 border border-gray-300">
                    {request?.requestDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FoodRequest;
