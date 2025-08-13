import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
import { Typography } from "@mui/material";

const ExploreMenu = ({ category, setCategory }) => {

  return (
    <div className="explore-menu" id="explore-menu">
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
        Explore our menu
      </Typography>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="explore-menu-list-item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p className="item_menu">{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
