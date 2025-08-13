import React, { useState } from "react";
import Header from "../components/Header/Header";
import About from "../components/Header/About";
import BookingBanner from "../components/Banner/BookingBanner";
import ExploreMenu from "../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../components/FoodDisplay/FoodDisplay";

const HomePage = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <About />
      <BookingBanner />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default HomePage;