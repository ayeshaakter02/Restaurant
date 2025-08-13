// import React from 'react'
// import './Home.css'
// import Header from '../../components/Header/Header'
// const Home = () => {
//   return (
//     <div>
//         <Header/>
//     </div>
//   )
// }

// export default Home


import React, { useState } from "react";
import Header from "../Header/Header";
import ExploreMenu from "../ExploreMenu/ExploreMenu";
import FoodDisplay from "../FoodDisplay/FoodDisplay";
import About from "../Header/About";
import BookingBanner from "../Banner/BookingBanner";

const Home = () => {
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

export default Home;