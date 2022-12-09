import {useEffect, useState, useRef} from "react";
import Hero from "./Hero";

let count = 0;
function Slider({data}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    // startSlider();
  }, []);
  const startSlider = () => {
    setInterval(() => {
      handleOnNextClick();
    }, 10000);
  };
  const handleOnNextClick = () => {
    count = (count + 1) % data.length;
    setCurrentIndex(count);
  };
  const handleOnPrevClick = () => {
    count = (currentIndex + data.length - 1) % data.length;
    setCurrentIndex(count);
  };
  return (
    <div className="w-full h-screen select-none relative">
      <Hero
        heading={data[currentIndex].title}
        message={data[currentIndex].subtitle}
        url={data[currentIndex].url}
      />
      <div className="hidden md:flex absolute w-full top-2/4 transform -translate-y-1/2 px-3 flex justify-between items-center text-white z-[3]">
        <button onClick={handleOnPrevClick}>Previous</button>
        <button onClick={handleOnNextClick}>Next</button>
      </div>
    </div>
  );
}

export default Slider;
