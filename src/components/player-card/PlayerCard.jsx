import React, { useState } from "react";
import "./PlayerCard.css";
import { GiSoccerKick } from "react-icons/gi";
import { TbSoccerField } from "react-icons/tb";
import { GiSoccerBall } from "react-icons/gi";
import { MdAssistantPhoto } from "react-icons/md";
import { FaTrophy } from "react-icons/fa6";

const PlayerCard = ({
  id,
  name,
  img,
  statistics,
  profile,
  official_career,
}) => {
  const [imgVisible, setImgVisible] = useState(true);
  const [zIndex, setZIndex] = useState(-1);
  const [borderBottom, setBorderBottom] = useState("");

  const toggleImgVisibility = () => {
    setImgVisible(!imgVisible);
    setZIndex(imgVisible ? 5 : -1);
    setBorderBottom(!imgVisible ? "" : "2px solid gray");
  };

  return (
    <div
      className="col-xl-3 col-lg-4 col-md-6 col-xs-12 text-center player-card border border-5"
      onClick={toggleImgVisibility}
    >
      <div className={`img-container ${imgVisible ? "" : "d-none"}`}>
        <img src={img} alt={id} />
      </div>
      <div className="name-container">
        <h2 className="fs-4" style={{ borderBottom: borderBottom }}>
          {name}
        </h2>
        <p className={` ${imgVisible ? "d-none mb-0 pb-0 " : ""}`}>
          <GiSoccerKick style={{ color: "purple", fontSize: "40px" }} />(
          {official_career})
        </p>
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
          <GiSoccerBall style={{ color: "red", fontSize: "40px" }} />
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
        <li className="m-auto">
          <button className="btn mt-4 bg-info">
            <a href={profile} className="text-black" target="blank">
              Profile
            </a>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default PlayerCard;
