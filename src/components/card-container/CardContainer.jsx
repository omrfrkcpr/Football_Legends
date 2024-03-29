import React, { useState } from "react";
import PlayerCard from "../player-card/PlayerCard";
import "./CardContainer.css";

const CardContainer = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="card-container rounded-2 p-4 pt-2">
      <div className="search text-center m-4">
        <input
          type="text"
          placeholder="Search a legend"
          className="px-2 w-75"
          autoFocus
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
      <div className=" justify-content-center row">
        {filteredData.map(
          ({ id, name, img, statistics, profile, official_career }) => (
            <PlayerCard
              key={id}
              id={id}
              name={name}
              img={img}
              statistics={statistics}
              profile={profile}
              official_career={official_career}
            />
          )
        )}
      </div>
    </div>
  );
};

export default CardContainer;
