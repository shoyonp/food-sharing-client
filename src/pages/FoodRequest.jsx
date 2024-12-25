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
    <div>
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>Donar Name </th>
              <th>Pickup Location</th>
              <th>Expire Date</th>
              <th>Request Date</th>
            </tr>
          </thead>
          <tbody>
            {foodRequests?.map((request, idx) => (
              <tr key={request._id} request={request}>
                <th>{idx + 1}</th>
                <td>{request?.donarName}</td>
                <td>{request?.pickupLocation}</td>
                <td>{request?.expiredDate}</td>
                <td>{request?.requestDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodRequest;
