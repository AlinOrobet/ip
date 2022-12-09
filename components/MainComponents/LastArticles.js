import {useEffect, useState} from "react";
import ArticleCard from "./ArticleCard";
import {GrFormPreviousLink, GrLinkNext} from "react-icons/gr";
let count = 0;
function LastArticles({data}) {
  const [firstIndex, setFirstIndex] = useState(0);
  const [secoundIndex, setSecoundIndex] = useState(firstIndex + 1);
  const [thirdIndex, setThirdIndex] = useState(secoundIndex + 1);
  const handleOnNextClick = () => {
    count = (count + 1) % data.length;
    setFirstIndex(count);
    setSecoundIndex((count + 1) % data.length);
    setThirdIndex((count + 2) % data.length);
  };
  const handleOnPrevClick = () => {
    count = (firstIndex + data.length - 1) % data.length;
    setFirstIndex(count % data.length);
    setSecoundIndex((count + 1) % data.length);
    setThirdIndex((count + 2) % data.length);
  };
  return (
    <div id="articles" className="text-white px-6 sm:px-14 my-10">
      <div className="text-white text-center text-xl font-bold">News</div>
      <div className="flex space-x-2">
        <button onClick={handleOnPrevClick} className="hidden lg:inline">
          <GrFormPreviousLink className="bg-white rounded-full items-center" size={30} />
        </button>
        <div className="flex items-center mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ArticleCard data={data[firstIndex]} />
          <ArticleCard data={data[secoundIndex]} />
          <ArticleCard data={data[thirdIndex]} />
        </div>
        <button onClick={handleOnNextClick} className="hidden lg:inline">
          <GrFormPreviousLink className="bg-white rounded-full rotate-180 items-center" size={30} />
        </button>
      </div>
    </div>
  );
}
{
}
export default LastArticles;
