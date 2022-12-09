import React from "react";
import PlayerCard from "./PlayerCard";

function Players() {
  return (
    <div id="players" className="text-white px-6 mx-auto my-10">
      <div className="text-center text-2xl font-bold">Jucatori</div>
      <div className="flex flex-row items-center space-x-5 py-5 text-md font-semibold">
        <p>Ridicatori</p>
        <p>Centrii</p>
        <p>Extreme</p>
        <p>Falsi</p>
      </div>
      <div className="">
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
      </div>
    </div>
  );
}

export default Players;
