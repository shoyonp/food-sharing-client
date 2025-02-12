import donor1 from "../assets/assets/1200px-Andrzej_Person_Kancelaria_Senatu.jpg";
import donor2 from "../assets/assets/shutterstock_648907024.jpg";
import donor3 from "../assets/assets/Personnel image 4483.jpg";
import donor4 from "../assets/assets/person.jpg";
import donor5 from "../assets/assets/lloyd-sikeba.jpg";
import donor6 from "../assets/assets/Emily Carter-2-headshot.jpg";
import { Link } from "react-router-dom";

const SectionTwo = () => {
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
          {/* Story Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 overflow-hidden hover:scale-105 transform transition-all duration-300">
            <img
              src={donor1}
              alt="Donor"
              referrerPolicy="no-referrer"
              className="rounded-full w-12 h-12 object-cover mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-center text-gray-800">
              John Doe
            </h3>
            <p className="text-gray-600 mt-4 text-sm">
              "Running a small bistro means I often have extra meals that would
              otherwise go to waste. Sharing these meals through this platform
              has helped me give back to the community while reducing food
              waste. Just last week, I donated 20 meals to a local shelter. It's
              a win-win for everyone."
            </p>
          </div>
          {/* Story Card 2*/}
          <div className="bg-white shadow-lg rounded-lg p-6 overflow-hidden hover:scale-105 transform transition-all duration-300">
            <img
              src={donor2}
              alt="Donor"
              referrerPolicy="no-referrer"
              className="rounded-full mx-auto object-cover mb-4 w-12 h-12"
            />
            <h3 className="text-xl font-semibold text-center text-gray-800">
              Michael Johnson
            </h3>
            <p className="text-gray-600 mt-4 text-sm">
              "Donating extra meals through this platform has been such a
              rewarding experience. Knowing that my food helps those in need
              motivates me to do more."
            </p>
          </div>
          {/* Story Card 3*/}
          <div className="bg-white shadow-lg rounded-lg p-6 overflow-hidden hover:scale-105 transform transition-all duration-300">
            <img
              src={donor3}
              alt="Donor"
              referrerPolicy="no-referrer"
              className="rounded-full mx-auto mb-4 object-cover w-12 h-12"
            />
            <h3 className="text-xl font-semibold text-center text-gray-800">
              Sophia Patel
            </h3>
            <p className="text-gray-600 mt-4 text-sm">
              "As a bakery owner, I used to feel sad about throwing away unsold
              bread and pastries at the end of the day. Now, I use this platform
              to donate them. Recently, I provided 50 loaves of bread to
              families in need. Seeing their smiles makes my efforts
              worthwhile."
            </p>
          </div>
          {/* Story Card 4*/}
          <div className="bg-white shadow-lg rounded-lg p-6 overflow-hidden hover:scale-105 transform transition-all duration-300">
            <img
              src={donor4}
              alt="Donor"
              referrerPolicy="no-referrer"
              className="rounded-full mx-auto mb-4 object-cover w-12 h-12"
            />
            <h3 className="text-xl font-semibold text-center text-gray-800">
              David Ramirez
            </h3>
            <p className="text-gray-600 mt-4 text-sm">
              "After cleaning out my pantry, I realized I had a lot of canned
              goods and dry food that I didn’t need. I donated over 30 items,
              including rice, beans, and soup cans. Knowing that these items
              went to struggling families instead of sitting unused in my home
              makes me feel so fulfilled."
            </p>
          </div>
          {/* Story Card 5*/}
          <div className="bg-white shadow-lg rounded-lg p-6 overflow-hidden hover:scale-105 transform transition-all duration-300">
            <img
              src={donor5}
              alt="Donor"
              referrerPolicy="no-referrer"
              className="rounded-full mx-auto mb-4 object-cover w-12 h-12"
            />
            <h3 className="text-xl font-semibold text-center text-gray-800">
              Hannah Williams
            </h3>
            <p className="text-gray-600 mt-4 text-sm">
              "I love cooking for a cause. During a recent community gathering,
              I prepared 10 trays of hot meals and donated them to this platform
              for distribution. It feels amazing to see how a simple act of
              cooking can bring so much joy and nourishment to others."
            </p>
          </div>
          {/* Story Card 6*/}
          <div className="bg-white shadow-lg rounded-lg p-6 overflow-hidden hover:scale-105 transform transition-all duration-300">
            <img
              src={donor6}
              alt="Donor"
              referrerPolicy="no-referrer"
              className="rounded-full mx-auto mb-4 object-cover w-12 h-12"
            />
            <h3 className="text-xl font-semibold text-center text-gray-800">
              Emily Carter
            </h3>
            <p className="text-gray-600 mt-4 text-sm">
              "I had surplus fruits and vegetables from my home garden that I
              couldn't consume. Through this platform, I donated 15 pounds of
              fresh produce to a local family in need. It feels amazing to know
              that my small contribution can provide healthy meals for someone
              else. I’m inspired to grow and share even more!"
            </p>
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
      </div>
    </section>
  );
};

export default SectionTwo;
