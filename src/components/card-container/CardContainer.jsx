import React from "react";
import PlayerCard from "../player-card/PlayerCard";
import "./CardContainer.css";

const CardContainer = ({ data }) => {
  console.log({ data });

  return (
    <div className="card-container rounded-2 p-4">
      <div className="search text-center m-4">
        <input
          type="text"
          placeholder="Search a legend"
          className="px-2 w-75"
          autoFocus
        />
      </div>
      <div className=" justify-content-center row">
        {data.map((item) => (
          <PlayerCard {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
