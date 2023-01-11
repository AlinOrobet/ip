import React from "react";
import Hero from "./Hero";
import NextMatches from "./NextMatches";
import LastArticles from "./LastArticles";
import Players from "./Players";
import About from "./About";
import LayoutMain from "../../layout/layoutMain";
function Home({heroData, articlesData, matchesData, playersData, galleryData, setCategory}) {
  return (
    <LayoutMain setCategory={setCategory}>
      <div className="flex justify-center items-center mt-24">
        <div className="w-full">
          <Hero data={heroData} />
        </div>
      </div>
      <div className="flex justify-center flex-col items-start">
        <LastArticles data={articlesData} />
      </div>
      <div className="flex justify-center flex-col items-start">
        <NextMatches data={matchesData} />
      </div>
      <div className="flex justify-center flex-col items-start">
        <Players data={playersData} />
      </div>
      <div className="flex justify-center flex-col items-start">
        <About data={galleryData} />
      </div>
    </LayoutMain>
  );
}

export default Home;
