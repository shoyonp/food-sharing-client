import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const SectionTwo = () => {
  const { data: storys = [], isLoading } = useQuery({
    queryKey: ["storys"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://food-sharing-server-zeta.vercel.app/story"
      );
      return data;
    },
  });
  if (isLoading) {
    return (
      <span className="loading loading-dots loading-lg mx-auto flex justify-center  min-h-screen"></span>
    );
  }
  return (
    <section className="bg-gray-50 py-12 mx-auto w-11/12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Making a Difference Together
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Real stories from donors and recipients who are helping us reduce food
          waste and make an impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {storys?.map((story,idx) => (
            <div key={idx} className="bg-white shadow-lg rounded-lg p-6 overflow-hidden hover:scale-105 transform transition-all duration-300">
              <img
                src={story?.image}
                alt={story?.name}
                referrerPolicy="no-referrer"
                className="rounded-full w-12 h-12 object-cover mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-center text-gray-800">
                {story?.name}
              </h3>
              <p className="text-gray-600 mt-4 text-sm">"{story?.story}"</p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-12">
        <Link to="/shareStory">
          <button
            className="btn mb-4 px-4 py-2 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 text-white 
        hover:from-gray-500 hover:via-gray-600 hover:to-gray-700 transform transition duration-300 hover:scale-110"
          >
            Share Your Story
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SectionTwo;
