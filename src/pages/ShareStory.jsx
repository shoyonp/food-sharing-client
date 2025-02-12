import axios from "axios";
import { useContext} from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UseTitle from "../components/UseTitle";
import Lottie from "lottie-react";
import ShareLottieData from "../assets/share.json";
import { motion } from "framer-motion";
import { AuthContext } from "../provider/AuthProvider";

const ShareStory = () => {
  const { user } = useContext(AuthContext);
  UseTitle("Share Your Story");
  const handleShare = async (e) => {
    e.preventDefault();
    const form = e.target;
    const story = form.story.value;

    const formData = {
      image: user?.photoURL,
      name: user?.displayName,
      story,
    };

    const { data } = await axios.post(
      `https://food-sharing-server-zeta.vercel.app/story`,
      formData
    );
    console.log(data);
    if (data.insertedId) {
      toast.success("Story Posted successfully");
    //   navigate("/");
    }
  };

  return (
    <div className="bg-[#F4F3F0] p-8 w-full md:p-16 mt-16 mx-auto flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold  w-11/12 mb-6 text-black"
      >
        Share Your Story
      </motion.h2>
      <div className="w-11/12 flex flex-col gap-10 md:flex-row items-center">
        <form className="w-full lg:w-3/4 bg-white shadow-lg rounded-lg p-6" onSubmit={handleShare}>
          <div className="md:flex mb-8 gap-4">
            {/* Story Input */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-lg font-semibold">Your Story</span>
              </label>
              <textarea
                name="story"
                placeholder="Write your story here..."
                className="textarea textarea-bordered w-full h-40 p-4"
                required
              ></textarea>
            </div>
          </div>
          <motion.input
            type="submit"
            value="Share Now"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-block bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white 
              hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 focus:ring-blue-300 transition duration-300"
          />
        </form>
        <div className="w-96">
          <Lottie animationData={ShareLottieData} />
        </div>
      </div>
    </div>
  );
};

export default ShareStory;
