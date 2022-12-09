import React from "react";
import MatchCard from "./MatchCard";

function NextMatches({data}) {
  return (
    <div id="matches" className="text-white px-6 mx-auto my-10">
      <div className="text-center text-2xl font-bold">Urmatoarele Meciuri</div>
      <div className="hidden lg:flex justify-end -mt-[20px] text-md font-semibold italic">
        Vezi tot calendarul
      </div>
      <div className="hidden lg:flex items-center mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <MatchCard data={data[0]} />
        <MatchCard data={data[1]} />
        <MatchCard data={data[2]} />
      </div>
      <div className="lg:hidden flex items-center mt-10">
        <MatchCard data={data[0]} />
      </div>
      <div className="lg:hidden text-center text-xl font-bold my-10">Vezi tot calendarul</div>
    </div>
  );
}

export default NextMatches;
