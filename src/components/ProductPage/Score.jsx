import React from "react";
import Star from "./Star";
import { arrStars } from "../../constants/score";

const Score = ({ countStar }) => {
  return <div className="starsRewiws">
    {arrStars.map((item) => {
    return item.id <= countStar ? (
      <Star color="#F0CC84" />
    ) : (
      <Star color="#E6E6E6" />
    );
  })}
  </div>
   
};

export default Score;
