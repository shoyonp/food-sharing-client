import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import UseTitle from "../components/UseTitle";

const UpdateFood = () => {
  const [food, setFood] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  UseTitle("Update Food");
  useEffect(() => {
    fetchFood();
  }, [id]);

  const fetchFood = async () => {
    const { data } = await axios.get(
      `https://food-sharing-server-zeta.vercel.app/food/${id}`
    );
    setFood(data);
    // console.log(data);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;

    const foodName = form.foodName.value;
    const foodImage = form.foodImage.value;
    const foodQuantity = form.foodQuantity.value;
    const pickupLocation = form.pickupLocation.value;
    const expiredDate = form.expiredDate.value;
    const additionalNotes = form.additionalNotes.value;

    const formData = {
      foodName,
      //   donator: {
      //     image: user?.photoURL,
      //     name: user?.displayName,
      //     email: user?.email,
      //   },
      foodImage,
      foodQuantity,
      pickupLocation,
      expiredDate,
      additionalNotes,
      foodStatus: food.foodStatus,
    };

    const { data } = await axios.put(
      `https://food-sharing-server-zeta.vercel.app/updateFood/${id}`,
      formData
    );
    if (data.modifiedCount || data.upsertedCount) {
      toast.success("Food updated successfully");
      navigate("/manageFood");
    }
  };

  return (
    <div className="bg-[#F4F3F0] p-24 w-3/5 mx-auto">
      <h2 className="text-3xl font-bold">Update Food</h2>
      <form onSubmit={handleUpdate}>
        {/* form name and image row */}
        <div className="md:flex mb-8 gap-4">
          {/* food name */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Food Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="foodName"
                defaultValue={food?.foodName}
                placeholder="Food Name"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          {/* food image */}

          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Food Image</span>
            </label>
            <label className="input-group">
              <input
                type="url"
                name="foodImage"
                placeholder="Photo URL"
                defaultValue={food?.foodImage}
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        {/* form quantity and location row */}
        <div className="md:flex mb-8 gap-4">
          {/* food quantity */}
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Food Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="foodQuantity"
                defaultValue={food?.foodQuantity}
                placeholder="Food Quantity"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          {/* pickup loaction */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Pickup Locatiion</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="pickupLocation"
                defaultValue={food?.pickupLocation}
                placeholder="Pickup Location"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>
        {/* form Date and notes row */}
        <div className="md:flex mb-8 gap-4">
          <div className="form-control md:w-1/2 ">
            <label className="label">
              <span className="label-text">Expired Date</span>
            </label>
            <label className="input-group">
              <input
                type="date"
                name="expiredDate"
                defaultValue={food?.expiredDate}
                placeholder="Expired Date"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
          {/* additional notes */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Additional Notes</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="additionalNotes"
                defaultValue={food?.additionalNotes}
                placeholder="Additional Notes"
                className="input input-bordered w-full"
                required
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Update"
          className="btn btn-block btn-neutral"
        />
      </form>
    </div>
  );
};

export default UpdateFood;
