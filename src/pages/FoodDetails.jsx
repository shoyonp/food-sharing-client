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
    <>
      <div className=" bg-gradient-to-r from-[#FAFAF7] to-[#EDEDED] flex items-center justify-center">
        <div className="card card-side bg-[#F5F5DC] shadow-xl w-11/12 mx-auto my-4 flex flex-col md:flex-row overflow-hidden rounded-lg transition-transform duration-500 hover:scale-105">
          {/* Food Image */}
          <figure className="w-full md:w-1/2">
            <img
              className="h-[300px] md:h-[500px] w-full object-cover"
              src={foodImage}
              alt="Food"
            />
          </figure>

          {/* Card Body */}
          <div className="card-body w-full md:w-1/2 p-6 md:p-8 space-y-4">
            {/* Donator Info */}
            <div className="flex items-center gap-6">
              <img
                className="w-16 h-16 rounded-full border-2 border-white shadow-md"
                src={donator?.image}
                alt="Donator"
              />
              <div>
                <h2 className="text-lg font-semibold text-[#4B4B4B]">
                  {donator?.name}
                </h2>
                <h3 className="text-sm text-[#737373]">{donator?.email}</h3>
              </div>
            </div>

            {/* Food Details */}
            <h2 className="card-title text-2xl font-bold text-[#4B4B4B]">
              {foodName}
            </h2>
            <p className="text-lg text-[#737373]">Name: {foodName}</p>
            <p className="text-sm text-[#737373]">Quantity: {foodQuantity}</p>
            <p className="text-sm text-[#737373]">
              Pickup Location: {pickupLocation}
            </p>
            <p className="text-sm text-[#737373]">Expires on: {expiredDate}</p>
            <p className="text-sm text-[#737373]">
              Additional Notes: {additionalNotes}
            </p>
            <p className="text-sm text-[#737373]">Status: {foodStatus}</p>

            {/* Request Button */}
            <div className="card-actions justify-end">
              <button
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
                className="btn bg-[#A4A49D] hover:bg-[#8E8E85] text-white px-6 py-2 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
              >
                Request
              </button>
            </div>

            {/* Modal */}
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box rounded-lg p-6 space-y-4 bg-[#F7F7F7] shadow-lg">
                <h3 className="font-bold text-xl text-[#4B4B4B]">{foodName}</h3>
                <img
                  className="w-full h-40 md:h-48 rounded-lg object-cover"
                  src={foodImage}
                  alt="Food"
                />

                {/* Modal Details */}
                <div className="space-y-2 text-[#4B4B4B]">
                  <h5>ID: {_id}</h5>
                  <h3>Donator's Email: {donator?.email}</h3>
                  <h3>Donator's Name: {donator?.name}</h3>
                  <h3>User Email: {user?.email}</h3>
                  <h4>Current Date: {date}</h4>
                  <p>Pickup Location: {pickupLocation}</p>
                  <p>Expired Date: {expiredDate}</p>
                  <p className="py-4">{additionalNotes}</p>
                </div>

                {/* Modal Buttons */}
                <div className="flex justify-between">
                  <button
                    onClick={() => handleRequest(food)}
                    className="btn bg-[#D9A37A] hover:bg-[#C18C6B] text-white px-6 py-2 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
                  >
                    Request
                  </button>
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_5").close()
                    }
                    className="btn btn-circle bg-[#D4D4D2] hover:bg-[#BABAB7] text-[#4B4B4B] text-lg"
                  >
                    ✕
                  </button>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodDetails;
