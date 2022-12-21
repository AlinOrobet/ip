import {useEffect, useState} from "react";
import PlayerCard from "./PlayerCard";
import {GrFormPreviousLink, GrLinkNext} from "react-icons/gr";
let count = 0;
function Players({data}) {
  const [filteredData, setFilteredData] = useState(
    data.filter((item) => item.position === "Centru")
  );
  const handleFilterData = (position) => {
    setFilteredData(data.filter((item) => item.position === position));
  };
  const [nrOfPlayersAtResize, setNrOfPlayersAtResize] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 767) {
        setNrOfPlayersAtResize(1);
      } else if (window.innerWidth > 767 && window.innerWidth < 1035) {
        setNrOfPlayersAtResize(2);
      } else if (window.innerWidth > 1035 && window.innerWidth < 1332) {
        setNrOfPlayersAtResize(3);
      } else if (window.innerWidth > 1332) {
        setNrOfPlayersAtResize(4);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);
  console.log(filteredData.length + " " + nrOfPlayersAtResize);
  const [firstIndex, setFirstIndex] = useState(0);
  const [secoundIndex, setSecoundIndex] = useState(firstIndex + 1);
  const [thirdIndex, setThirdIndex] = useState(secoundIndex + 1);
  const [fourthIndex, setFourthIndex] = useState(thirdIndex + 1);
  const handleOnNextClick = () => {
    count = (count + 1) % filteredData.length;
    setFirstIndex(count);
    setSecoundIndex((count + 1) % filteredData.length);
    setThirdIndex((count + 2) % filteredData.length);
    setFourthIndex((count + 3) % filteredData.length);
  };
  const handleOnPrevClick = () => {
    count = (firstIndex + filteredData.length - 1) % filteredData.length;
    setFirstIndex(count % filteredData.length);
    setSecoundIndex((count + 1) % filteredData.length);
    setThirdIndex((count + 2) % filteredData.length);
    setFourthIndex((count + 3) % filteredData.length);
  };
  return (
    <div id="players" className="text-white px-6 mx-auto">
      <div className="text-center text-2xl font-bold">Jucatori</div>
      <div className="flex flex-row justify-center space-x-7 py-5 text-md font-semibold cursor-pointer">
        <p className="hover:scale-150 duration-300" onClick={() => handleFilterData("Ridicator")}>
          Ridicator
        </p>
        <p className="hover:scale-150 duration-300" onClick={() => handleFilterData("Centru")}>
          Centru
        </p>
        <p className="hover:scale-150 duration-300" onClick={() => handleFilterData("Extrema")}>
          Extrema
        </p>
        <p className="hover:scale-150 duration-300" onClick={() => handleFilterData("Fals")}>
          Universal
        </p>
        <p className="hover:scale-150 duration-300" onClick={() => handleFilterData("Libero")}>
          Libero
        </p>
      </div>
      <div className="flex items-center">
        <button
          onClick={handleOnPrevClick}
          className={`${filteredData.length >= nrOfPlayersAtResize ? "" : "hidden"}`}
        >
          <GrFormPreviousLink className="bg-white rounded-full items-center" size={30} />
        </button>
        <div className="flex items-center gap-5 p-10 mx-auto">
          {filteredData?.slice(0, 1).map((item) => (
            <PlayerCard key={item.id} data={filteredData[firstIndex]} />
          ))}
          {filteredData.length >= nrOfPlayersAtResize &&
            nrOfPlayersAtResize > 1 &&
            filteredData
              ?.slice(0, 1)
              .map((item) => <PlayerCard key={item.id} data={filteredData[secoundIndex]} />)}
          {filteredData.length >= nrOfPlayersAtResize &&
            nrOfPlayersAtResize > 2 &&
            filteredData
              ?.slice(0, 1)
              .map((item) => <PlayerCard key={item.id} data={filteredData[thirdIndex]} />)}
          {filteredData.length >= nrOfPlayersAtResize &&
            nrOfPlayersAtResize > 2 &&
            filteredData
              ?.slice(0, 1)
              .map((item) => <PlayerCard key={item.id} data={filteredData[fourthIndex]} />)}
        </div>
        <button
          onClick={handleOnNextClick}
          className={`${filteredData.length >= nrOfPlayersAtResize ? "" : "hidden"}`}
        >
          <GrFormPreviousLink className="bg-white rounded-full rotate-180 items-center" size={30} />
        </button>
      </div>
    </div>
  );
}

export default Players;
