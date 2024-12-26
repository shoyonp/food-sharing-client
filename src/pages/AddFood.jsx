import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UseTitle from "../components/UseTitle";

const AddFood = () => {
  //   const [expiredDate, setExpiredDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  UseTitle('Add Foods')
  const handleAddFood = async (e) => {
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
      donator: {
        image: user?.photoURL,
        name: user?.displayName,
        email: user?.email,
      },
      foodImage,
      foodQuantity,
      pickupLocation,
      expiredDate,
      additionalNotes,
      foodStatus: "available",
    };

    // console.log(formData);

    // fetch("https://food-sharing-server-zeta.vercel.app/foods", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.insertedId) {
    //       toast.success("Food added successfully");
    //       navigate("/manageFood");
    //     }
    //   });

    const { data } = await axios.post("https://food-sharing-server-zeta.vercel.app/foods", formData);
    if (data.insertedId) {
      toast.success("Food added successfully");
      navigate("/manageFood");
    }
    // console.log(data);
  };

  return (
    <div className="bg-[#F4F3F0] p-10 w-full md:p-24 h-screen  md:w-3/5 mx-auto">
      <h2 className="text-3xl font-bold">Add a Food</h2>
      <form onSubmit={handleAddFood}>
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
                placeholder="Food Name"
                required
                className="input input-bordered w-full"
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
                required
                className="input input-bordered w-full"
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
                placeholder="Food Quantity"
                required
                className="input input-bordered w-full"
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
                placeholder="Pickup Location"
                required
                className="input input-bordered w-full"
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
                // onChange={(date) => setExpiredDate(date)}
                placeholder="Expired Date"
                required
                className="input input-bordered w-full"
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
                placeholder="Additional Notes"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <input
          type="submit"
          value="Add Food"
          className="btn btn-block bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white 
hover:from-amber-600 hover:via-amber-700 hover:to-amber-800
focus:ring-yellow-300
"
        />
      </form>
    </div>
  );
};

export default AddFood;
