import React from "react";
import Banner from "../components/Banner";
import FeaturedFoods from "../components/FeaturedFoods";
import UseTitle from "../components/UseTitle";

const Home = () => {
  UseTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <section className="w-11/12 mx-auto">
        {" "}
        <FeaturedFoods></FeaturedFoods>
      </section>
    </div>
  );
};

export default Home;
