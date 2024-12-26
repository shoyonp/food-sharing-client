import { Link } from "react-router-dom";

const Slide = ({ img, text, title }) => {
  return (
    <div
      className="relative bg-cover bg-center h-[500px] w-full"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="inset-0 absolute text-center bg-gradient-to-b from-black/40 to-black/70">
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-md text-gray-300 mb-6">{text}</p>
          <Link to="/addFood">
            <button
              className="px-6 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white 
hover:from-blue-600 hover:via-blue-700 hover:to-blue-800
  py-2 rounded-md  transition duration-300 hover:scale-110transition transform"
            >
              Donate Now
            </button> 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;
