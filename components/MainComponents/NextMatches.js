import React, {useState, useEffect} from "react";
import MatchCard from "./MatchCard";

function NextMatches({data}) {
  const [nrOfMatchesAtResize, setNrOfMatchesAtResize] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 767) {
        setNrOfMatchesAtResize(1);
      } else if (window.innerWidth > 767 && window.innerWidth < 1035) {
        setNrOfMatchesAtResize(2);
      } else {
        setNrOfMatchesAtResize(3);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);
  return (
    <div id="matches" className="text-white px-6 mx-auto my-10">
      <div className="text-center text-2xl font-bold">Urmatoarele Meciuri</div>
      <div className="hidden lg:flex justify-end -mt-[20px] text-md font-semibold italic">
        Vezi tot calendarul
      </div>

      <div className="flex items-center mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.slice(0, nrOfMatchesAtResize).map((item) => (
          <MatchCard key={item.id} data={item} />
        ))}
      </div>
      <div className="lg:hidden text-center text-xl font-bold my-10">Vezi tot calendarul</div>
    </div>
  );
}

export default NextMatches;
