import React from "react";
import "./Discount.css";
import Carousel from "react-bootstrap/Carousel";
import Image1 from "../../assets/family1.png";
import Image2 from "../../assets/family2.png";
import Image3 from "../../assets/family3.png";
import { Typography } from "@mui/material";

const Discount = () => {
  return (
    <div className="Image-Slider">
      <div>
        <div className="title">
          <p>Offers!</p>
          <p>Offers!</p>
          <p>Offers!</p>
        </div>
        <Typography
          variant="h5"
          component="content"
          sx={{
            flexGrow: 1,
            color: "#e52b34",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "40px",
            fontFamily: "Dancing Script",
            fontWeight: 800,
          }}
        >
          Only for Visitors
        </Typography>

        <Carousel>
          <Carousel.Item>
            <div className="image">
              <img src={Image1} alt="Family" />
            </div>

            <Carousel.Caption>
              <div className="caption">
                <h6>Family Combo Offer 1 (8 person )</h6>
                <p>1599 TK</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="image">
              <img src={Image2} alt="Family" />
            </div>

            <Carousel.Caption>
              <div className="caption">
                <h6>Family Combo Offer 2 (6 person)</h6>
                <p>1299 Tk</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="image">
              <img src={Image3} alt="Family" />
            </div>

            <Carousel.Caption>
              <div className="caption">
                <h6>Family Combo Offer 3 (4 person)</h6>
                <p>999 Tk</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="weekend">
          <Typography
            variant="h5"
            component="content"
            sx={{
              flexGrow: 1,
              color: "#e52b34",
              margin: "50px",
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "36px",
              fontFamily: "Dancing Script",
              fontWeight: 800,
            }}
          >
            Weekend Offers for Visitors ! (Friday-Satruday)
            <br />
            All Items have 20% off
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Discount;
