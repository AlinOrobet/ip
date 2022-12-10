function Hero({data}) {
  return (
    <div>
      <div
        className="relative overflow-hidden  bg-no-repeat bg-cover mt-20 h-[500px] md:h-[700px]"
        style={{
          backgroundImage: `url(${data.url})`,
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{backgroundColor: `rgba(0, 0, 0, 0.75)`}}
        >
          <div className="flex justify-center items-center h-full mt-20 md:mt-40">
            <div className="text-center text-white px-6 md:px-12">
              <h1 className="text-2xl lg:text-5xl font-bold tracking-tight">
                {data.title}
                <div className="flex items-center justify-center my-4 ">
                  <img src={data.emblema1} className="w-24" />
                  <h1 className="">{data.scor}</h1>
                  <img src={data.emblema2} className="w-24" />
                </div>
              </h1>
              <button
                type="button"
                className="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              >
                Citeste mai mult
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center text-white mt-10 divide-x-2 space-x-5">
        <h1 className="uppercase font-semibold text-md">Sponsori principali</h1>
        <div className="flex space-x-5 pl-5">
          <div className="hover:bg-red-300">LOGO SPONSOR 1</div>
          <div className="hover:bg-red-300">LOGO SPONSOR 2</div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
