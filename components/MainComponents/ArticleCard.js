import React from "react";
import Link from "next/link";
function ArticleCard({data}) {
  console.log();
  return (
    <Link href={`/articles/${data.id}`}>
      <div className="flex flex-col group cursor-pointer">
        <div className="relative w-full w-full group-hover:scale-105 transition-transform duration-200 ease-out bg-slate-100 text-black rounded-lg">
          <img
            src={data.url}
            alt={data.title}
            className="object-cover object-center h-56 w-full rounded-t-lg"
          />
          <div className="p-2">
            <div className="flex items-center justify-between italic font-semibold">
              <p>{data.author}</p>
              <p>{data.date}</p>
            </div>
            <div className="flex-1 pt-2">
              <p className="line-clamp-2 underline text-lg font-bold">{data.title}</p>
              <p className="line-clamp-2 text-gray-500">{data.subtitle}</p>
            </div>
          </div>
          <button className="bg-slate-500 h-[40px] w-full rounded-b-md hover:bg-slate-700 font-bold text-white ">
            Citeste mai mult
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ArticleCard;
