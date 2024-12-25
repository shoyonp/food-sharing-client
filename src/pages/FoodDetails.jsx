import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import UseTitle from "../components/UseTitle";

const FoodDetails = () => {
  const [date, setDate] = useState("");
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const food = useLoaderData();
  UseTitle("Details");
  const {
    _id,
    foodName,
    foodImage,
    foodQuantity,
    pickupLocation,
    expiredDate,
    additionalNotes,
    donator,
    foodStatus,
  } = food;

//   console.log(food);

  //   current date
  useEffect(() => {
    const currentDate = new Date().toLocaleDateString("en-US");
    // console.log(currentDate);
    setDate(currentDate);
  }, [Date]);

  //   request for a food
  const handleRequest = async (food) => {
    const email = user?.email;
    const donarName = food.donator.name;
    const pickupLocation = food.pickupLocation;
    const expiredDate = food.expiredDate;
    const requestDate = date;
    const foodId = _id;

    const reqData = {
      email,
      donarName,
      pickupLocation,
      expiredDate,
      requestDate,
      foodId,
    };
    const { data } = await axios.post(
      "https://food-sharing-server-zeta.vercel.app/req-food",
      reqData
    );
    if (data.insertedId) {
      toast.success("Request successfully");
      navigate("/foodRequest");
    }
    // console.log(data);
  };

  return (
    <div className="card card-side bg-orange-400 shadow-xl w-11/12 mx-auto my-4">
      <figure>
        <img className="h-[500px]" src={foodImage} alt="Food" />
      </figure>
      <div className="card-body">
        <div className="flex gap-6">
          <img className="w-16 rounded-full" src={donator?.image} alt="" />
          <h2>{donator?.name}</h2>
          <h3>{donator?.email}</h3>
        </div>
        <h2 className="card-title">{foodName}</h2>
        <p>{foodQuantity}</p>
        <p>{pickupLocation}</p>
        <p>{expiredDate}</p>
        <p>{additionalNotes}</p>
        <p>{foodQuantity}</p>
        <p>{foodStatus && foodStatus}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="btn btn-primary"
          >
            Request
          </button>
        </div>
        {/* modal */}
        <div>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">{foodName}</h3>
              <img src={foodImage} alt="" />
              <h5>{_id}</h5>
              <h3>{donator?.email}</h3>
              <h3>{donator?.name}</h3>
              <h3>{user?.email}</h3>
              <h4>Current Date: {date}</h4>
              <p>{pickupLocation}</p>
              <p>Expired Date: {expiredDate}</p>
              <p className="py-4">{additionalNotes}</p>
              <button onClick={() => handleRequest(food)} className="btn">
                Request
              </button>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
