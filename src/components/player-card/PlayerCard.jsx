import React from "react";
import "./PlayerCard.css";
import { TbSoccerField } from "react-icons/tb";
import { GoGoal } from "react-icons/go";
import { MdAssistantPhoto } from "react-icons/md";
import { FaTrophy } from "react-icons/fa6";
// import { data } from "../../helpers/data";

const PlayerCard = ({ id, name, img, statistics }) => {
  // console.log(props);
  // console.log({ data });
  // const { statistics } = props;
  console.log(statistics);

  return (
    <div className="col-xl-3 col-lg-4 col-md-6 text-center player-card border border-5 border-secondary">
      <div className="img-container">
        <img src={img} alt={id} />
      </div>
      <div className="name-container">
        <h2 className="fs-4">{name}</h2>
      </div>
      <ul className=" m-auto d-flex flex-column align-items-start bg-white border border-2 p-3 justify-content-center">
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
