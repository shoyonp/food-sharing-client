import { motion } from "framer-motion";
import { Accordion } from "daisyui";

const faqs = [
  {
    question: "How does food sharing work?",
    answer:
      "Users can share surplus food by posting it on our platform, and others can request to pick it up.",
  },
  {
    question: "Is the food safe to eat?",
    answer:
      "Yes! We encourage users to follow safety guidelines and only share fresh and edible food.",
  },
  {
    question: "Do I need to pay for shared food?",
    answer:
      "No, food sharing is completely free. Our goal is to reduce food waste and help the community.",
  },
  {
    question: "How do I request food?",
    answer:
      "Simply browse available food, click 'Request', and arrange a pickup with the donor.",
  },
];

const Faq = () => {
  return (
    <>
       <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-lg p-8">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent mb-8"
        >
          Frequently Asked Questions
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          <div className="join join-vertical w-full">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="collapse collapse-arrow bg-gray-50 shadow-md rounded-lg"
              >
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-lg font-semibold text-gray-700">
                  {faq.question}
                </div>
                <div className="collapse-content p-4 text-gray-700">
                  {faq.answer}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
};
export default Faq;
