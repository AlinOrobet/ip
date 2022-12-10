import React from "react";
function ArticleCard({data}) {
  const handleClick = () => {};
  return (
    <article className="bg-slate-100 flex flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out text-black  h-[450px] lg:h-[650px] xl:h-[550px]">
      <img
        src={data.url}
        alt={data.title}
        className="h-[250px] lg:h-[300px] w-full object-cover rounded-t-lg shadow-md"
      />
      <div className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col p-5">
          <h2 className="font-bold font-serif">{data.title}</h2>
          <section className="mt-2 flex-1">
            <p className="text-xs line-clamp-6">{data.subtitle}</p>
          </section>
          <footer className="text-xs text-right ml-auto flex space-x-1 pt-5 italic text-gray-400">
            <p>{data.author}</p>
            <p>{data.date}</p>
          </footer>
        </div>
        {/* READ MORE BUTTON */}
        <button
          onClick={handleClick}
          className="bg-orange-400 h-[30px] rounded-b-lg hover:bg-orange-500 font-bold"
        >
          Citeste mai mult
        </button>
      </div>
    </article>
  );
}

export default ArticleCard;
{
  /* <div className="h-[100%] rounded overflow-hidden shadow-lg">
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
    </div> */
}
