import Banner from "../components/Banner";
import FeaturedFoods from "../components/FeaturedFoods";
import UseTitle from "../components/UseTitle";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";
import Newsletter from "../components/Newsletter";
import CommunityImpact from "../components/CommunityImpact";

const Home = () => {
  UseTitle("Home");
  return (
    <div>
      <section className="">
        <Banner></Banner>
      </section>
      <section>
        <SectionOne></SectionOne>
      </section>
      <section className="w-11/12 mx-auto">
        <FeaturedFoods></FeaturedFoods>
      </section>
      <section>
        <SectionTwo></SectionTwo>
      </section>
      <section>
        {/* <CommunityImpact /> */}
      </section>
      <section>
        <Newsletter></Newsletter>
      </section>
    </div>
  );
};

export default Home;
