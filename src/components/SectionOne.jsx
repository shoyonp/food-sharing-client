import img from "../assets/assets/our_food.jpg";

const SectionOne = () => {
  return (
    <section className="welcome-section bg-gray-50 py-16 w-11/12 mx-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* left */}
        <div>
          <h3 className="text-red-500 font-semibold text-sm tracking-wide uppercase mb-2">
            Food Sharing Platform
          </h3>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Share A Bite
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            At Share A Bite, we connect those who have surplus food with those
            in need. Join us in reducing food waste while making a meaningful
            impact on your community. Whether you want to donate food or request
            it, we make the process seamless and rewarding.
          </p>
          <ul className="text-gray-600">
            <li>Save food from going to waste.</li>
            <li>Help those in need in your community.</li>
            <li>Foster a sustainable and caring culture.</li>
          </ul>
        </div>
        {/* right */}
        <div className="relative">
          <img
            src={img}
            alt="Food Image"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
          <div className="absolute bottom-4 right-4 bg-red-500 text-white text-center p-4 rounded-lg shadow-md">
            <span className="text-3xl font-bold">5+</span>
            <p className="text-sm text-white">Years of Helping Communities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
