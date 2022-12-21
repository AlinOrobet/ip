import React from "react";
import Link from "next/link";
function ArticleCard({data}) {
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
              <p className="line-clamp-3 underline text-lg font-bold">{data.title}</p>
              <p className="line-clamp-2 text-gray-500">{data.subtitle}</p>
            </div>
          </div>
          <button className="bg-orange-400 h-[40px] w-full rounded-b-lg hover:bg-orange-500 font-bold">
            Citeste mai mult
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ArticleCard;
{
  /* <article className="bg-slate-100 flex flex-col rounded-lg shadow-sm hover:scale-105 hover:bg-slate-200 transition-all duration-200 ease-out text-black sm:h-[550px] lg:h-[600px]">
<img
  src={data.url}
  alt={data.title}
  className="h-[250px] lg:h-[300px] w-full object-cover rounded-t-lg shadow-md"
/>
<div className="flex-1 flex flex-col">
  <div className="flex-1 flex flex-col p-5">
    <h2 className="font-bold font-serif">{data.title}</h2>
    <section className="mt-2 flex-1">
      <p className="text-sm line-clamp-6">{data.subtitle}</p>
    </section>
    <footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-400">
      <p>{data.author}</p>
      <p>{data.date}</p>
    </footer>
  </div>
  <button className="bg-orange-400 h-[40px] rounded-b-lg hover:bg-orange-500 font-bold">
    Citeste mai mult
  </button>
</div>
</article> */
}
