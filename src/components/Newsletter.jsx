import toast from "react-hot-toast";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);
    toast.success("Email sent!");
    // reset email field
    setEmail("");
  };

  return (
    <section className="bg-gray-100 py-12 px-4 rounded-xl shadow-md mt-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Stay Updated with Food Sharing News 🍱
        </h2>
        <p className="text-gray-600 mb-6">
          Subscribe to get updates on food posts, community stories, and more!
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full sm:w-2/3 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
          <button
            type="submit"
            className="relative inline-block px-6 py-3 text-gray-800 font-medium border-2 border-gray-800 rounded-lg overflow-hidden group transition-all duration-300"
          >
            <span className="absolute left-0 top-0 w-full h-0 bg-gray-800 transition-all duration-300 ease-out group-hover:h-full group-hover:top-0 z-0"></span>
            <span className="relative z-10 group-hover:text-white transition duration-300">
              Subscribe
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
