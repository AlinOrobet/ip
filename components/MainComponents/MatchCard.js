import {data} from "autoprefixer";
import React from "react";

function MatchCard({data}) {
  return (
    <div className="bg-gray-50 py-4 text-black">
      <div className="px-4 py-3 text-2xl font-bold">{data.date}</div>
      <div className="px-4 pb-3 text-xl font-semibold">{data.hour}</div>
      <div className="flex justify-around items-center p-5">
        <img src={data.logo_1} alt={data.team_1} className="w-24" />
        <img src={data.logo_campionat} alt="logo_campionat" className="w-16" />
        <img src={data.logo_2} alt={data.team_2} className="w-24" />
      </div>
      <div className="flex flex-col justify-center items-center mb-10">
        <p className="block">{data.team_1}</p>
        <p className="block">{data.team_2}</p>
        <p className="mt-5">{data.location}</p>
      </div>
    </div>
  );
}

export default MatchCard;
