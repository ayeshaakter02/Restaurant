import React, { useContext } from "react";
import "./FoodDisplay.css";
import FoodItem from "../FoodItem/FoodItem";
import { StoreContext } from "../../context/StoreContext";
import { Typography } from "@mui/material";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <Typography
        variant="h5"
        component="div"
        sx={{
          flexGrow: 1,
          color: "#e52b34",
          fontSize: "50px",
          fontFamily: "Dancing Script",
          fontWeight: 800,
        }}
      >
        Top dishes near you
      </Typography>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                discount={item.discount}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
