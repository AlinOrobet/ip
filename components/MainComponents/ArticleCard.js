import React from "react";

function ArticleCard({data}) {
  return (
    <div className="h-[100%] rounded overflow-hidden shadow-lg">
      <img className="w-[100%] h-[270px] object-fill" src={data.url} alt={data.title} />
      <div className="py-4">
        <div className="font-bold text-xl mb-2">{data.title}</div>
        <p className="text-gray-700 text-base">{data.subtitle}</p>
      </div>
      <div className="">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  );
}

export default ArticleCard;
