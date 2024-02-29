import React from "react";
import { TbSoccerField } from "react-icons/tb";
import { GoGoal } from "react-icons/go";
import { MdAssistantPhoto } from "react-icons/md";
import { TfiCup } from "react-icons/tfi";

const PlayerCard = () => {
  return (
    <div>
      <TbSoccerField />
      <GoGoal />
      <MdAssistantPhoto />
      <TfiCup />
    </div>
  );
};

export default PlayerCard;
