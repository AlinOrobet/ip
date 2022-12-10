import React from "react";

function PlayerCard({data}) {
  return (
    <div
      className="bg-slate-100 flex flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out text-black capitalize relative overflow-hidden bg-no-repeat bg-cover h-[500px] w-[280px] "
      style={{
        backgroundImage: `url(${data.image})`,
      }}
    >
      <div className="px-4 pt-3 text-3xl font-bold">{data.lastName}</div>
      <div className="px-4 text-lg uppercase font-semibold">{data.position}</div>
      <div className="px-4 text-5xl uppercase font-bold">{data.shirtNumber}</div>
    </div>
  );
}

export default PlayerCard;
