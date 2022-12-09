function Hero({data}) {
  return (
    <div className="mt-[7rem]">
      <div className="lg:flex lg:relative px-6 sm:px-14">
        <img src={data.url} alt={data.title} className="w-screen h-[80%] relative rounded-t-3xl" />
        <h1 className="hidden lg:inline lg:absolute text-white text-4xl lg:top-[70%] w-[90%] text-center font-bold">
          {data.title}
          <div className="flex items-center justify-center">
            <img src={data.emblema1} className="w-24" />
            <h1 className="">{data.scor}</h1>
            <img src={data.emblema2} className="w-24" />
          </div>
        </h1>
        <h1 className="mt-5 lg:hidden text-white text-4xl l text-center font-bold">
          {data.title}
          <div className="flex items-center justify-center">
            <img src={data.emblema1} className="w-16 sm:w-20" />
            <h1 className="">{data.scor}</h1>
            <img src={data.emblema2} className="w-16 sm:w-20" />
          </div>
        </h1>
      </div>
    </div>
  );
}

export default Hero;
{
  /* <section id="home" className="w-full flex lg:flex-row flex-col sm:py-16 py-6 mt-20">
<div className="flex-1 flex justify-center items-start flex-col px-6 sm:px-14">
  <div className="flex flex-row justify-between items-center w-full">
    <h1 className="flex-1 font-poppins text-3xl xl:text-5xl font-bold text-white">
      {data[1].title}
    </h1>
    <div className="sm:flex hidden md:mr-4 mr-0"></div>
  </div>
  <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
    {data[1].subtitle}
  </p>
</div>
<div className={`flex-1 flex justify-center items-center mt-10 px-6 sm:px-14 `}>
  <img src={data[1].url} alt="billing" className="w-[100%] h-[100%] relative" />
</div>
</section> */
}
