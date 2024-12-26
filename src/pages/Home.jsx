import React from "react";
import Banner from "../components/Banner";
import FeaturedFoods from "../components/FeaturedFoods";
import UseTitle from "../components/UseTitle";
import SectionOne from "../components/SectionOne";
import SectionTwo from "../components/SectionTwo";

const Home = () => {
  UseTitle("Home");
  return (
    <div>
      <section className="w-11/12 mx-auto"><Banner></Banner></section>
      <section><SectionOne></SectionOne></section>
      <section className="w-11/12 mx-auto">
        {" "}
        <FeaturedFoods></FeaturedFoods>
      </section>
      <section><SectionTwo></SectionTwo></section>
    </div>
  );
};

export default Home;
