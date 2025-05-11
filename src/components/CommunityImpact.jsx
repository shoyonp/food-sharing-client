import { motion } from "framer-motion";
import { FaUtensils, FaSmile, FaHandsHelping } from "react-icons/fa";

const CommunityImpact = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          🌍 Our Community Impact
        </h2>
        <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
          Together, we’re reducing food waste and delivering happiness — one plate at a time.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition border-t-4 border-pink-500"
          >
            <FaUtensils className="text-4xl text-pink-500 mb-2 mx-auto" />
            <h3 className="text-3xl font-bold text-gray-800">12K+</h3>
            <p className="text-gray-500 mt-1">Meals Shared</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition border-t-4 border-blue-500"
          >
            <FaSmile className="text-4xl text-blue-500 mb-2 mx-auto" />
            <h3 className="text-3xl font-bold text-gray-800">6,500+</h3>
            <p className="text-gray-500 mt-1">Happy Receivers</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition border-t-4 border-green-500"
          >
            <FaHandsHelping className="text-4xl text-green-500 mb-2 mx-auto" />
            <h3 className="text-3xl font-bold text-gray-800">30+</h3>
            <p className="text-gray-500 mt-1">Communities Helped</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CommunityImpact;
