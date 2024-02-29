import React, { useState } from "react";
import "./PlayerCard.css";
import { TbSoccerField } from "react-icons/tb";
import { GoGoal } from "react-icons/go";
import { MdAssistantPhoto } from "react-icons/md";
import { FaTrophy } from "react-icons/fa6";

const PlayerCard = ({ id, name, img, statistics }) => {
  const [imgVisible, setImgVisible] = useState(true);
  const [zIndex, setZIndex] = useState(-1);

  const toggleImgVisibility = () => {
    setImgVisible(!imgVisible);
    setZIndex(imgVisible ? 5 : -1);
  };

  return (
    <div
      className="col-xl-3 col-lg-4 col-md-6 text-center player-card border border-5 border-secondary"
      onClick={toggleImgVisibility}
    >
      <div className={`img-container ${imgVisible ? "" : "d-none"}`}>
        <img src={img} alt={id} />
      </div>
      <div className="name-container">
        <h2 className="fs-4">{name}</h2>
      </div>
      <ul
        className={`m-auto d-flex flex-column align-items-start bg-white border border-2 p-3 justify-content-center`}
        style={{ zIndex: zIndex }}
      >
        <li>
          <TbSoccerField style={{ color: "green", fontSize: "40px" }} />
          <span>{statistics[0]}</span>
        </li>
        <li>
          <GoGoal style={{ color: "red", fontSize: "40px" }} />
          <span>{statistics[1]}</span>
        </li>
        <li>
          <MdAssistantPhoto style={{ color: "orange", fontSize: "40px" }} />
          <span>{statistics[2]}</span>
        </li>
        <li>
          <FaTrophy style={{ color: "black", fontSize: "40px" }} />
          <span>{statistics[3]}</span>
        </li>
      </ul>
    </div>
  );
};

export default PlayerCard;
