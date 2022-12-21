import React, {useState} from "react";
import LayoutMain from "../../layout/layoutMain";
import {GoLocation} from "react-icons/go";
import {SlArrowRight} from "react-icons/sl";
function Schedule() {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <LayoutMain>
      <div
        className="relative overflow-hidden bg-no-repeat bg-cover bg-center mt-28 h-[400px] lg:h-[500px]"
        style={{
          backgroundImage: `url(https://www.realmadrid.com/img/ultrapanoramica_1500px/fondocalendariofutbol2_20201002054055.jpg)`,
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{backgroundColor: `rgba(0, 0, 0, 0.75)`}}
        >
          <div className="flex justify-center items-center h-full">
            <div className="text-center text-white px-6 md:px-12">
              <h1 className="text-5xl font-bold tracking-tight">CALENDAR</h1>
              <h1 className="text-xl lg:text-3xl font-bold tracking-tight mt-5">NEXT MATCH</h1>
              <div className="flex items-center justify-center mt-10 ">
                <img src={nextMatch.logo_1} className="w-20 lg:w-24" alt={nextMatch.team_1} />
                <h1 className="text-4xl">VS</h1>
                <img src={nextMatch.logo_2} className="w-20 lg:w-24" alt={nextMatch.team_2} />
              </div>
              <div className="flex justify-between mt-10">
                <h1 className="text-xl lg:text-3xl font-bold tracking-tight">{nextMatch.date}</h1>
                <h1 className="text-xl lg:text-3xl font-bold tracking-tight">{nextMatch.hour}</h1>
              </div>
              <h1 className="text-xl lg:text-3xl font-bold tracking-tight mt-5">
                {nextMatch.location}
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="text-white flex items-center justify-center mt-10 px-6">
        <h1 className="text-2xl font-bold uppercase">Toate Meciurile</h1>
      </div> */}
      <div className="my-10 bg-white rounded-t-2xl container mx-auto mb-8">
        <h1 className="p-4 text-3xl font-bold uppercase">FIRST TEAM Schedule</h1>
        <h1 className="px-4 text-2xl font-semibold">December 2022</h1>
        {matches.map((item) => (
          <div key={item.id}>
            <div className="md:hidden pt-10 pl-10 flex items-center justify-between ">
              <div className="flex flex-col items-center space-y-4 w-full">
                <img src={item.logo_1} className="w-14" />
                <p className="font-bold">{item.team_1}</p>
              </div>
              <div className="flex flex-col items-center w-full">
                <p className="sm:hidden">{item.camp_description}</p>
                <img src={item.logo_campionat} className="w-14 hidden sm:inline" />
                <p className="font-bold uppercase">{item.date}</p>
                <p>{item.hour}</p>
              </div>
              <div className="flex flex-col items-center space-y-4 w-full">
                <img src={item.logo_2} className="w-14" />
                <p className="font-bold">{item.team_2}</p>
              </div>
              <div className="px-3">
                <SlArrowRight />
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:pt-8 md:pl-6">
              <div className="w-[125px]">
                <p className="font-bold uppercase">{item.date}</p>
                <p>{item.hour}</p>
              </div>
              <div className="border-l h-12" />
              <div className="px-3 lg:px-6">
                <img src={item.logo_campionat} className="w-14" />
              </div>
              <div className="border-l h-12" />
              <div className="px-6 lg:w-[200px] xl:w-[250px]">
                <p className="hidden lg:inline">{item.location}</p>
              </div>
              <div className="border-l h-12 hidden lg:inline" />
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-end w-[200px] xl:w-[300px] 2xl:w-[400px]">
                  <p className="font-bold">{item.team_1}</p>
                  <img src={item.logo_1} className="w-14" />
                </div>
                <h1 className="text-xl font-semibold text-red-800">VS.</h1>
                <div className="flex items-center w-[200px] xl:w-[300px] 2xl:w-[400px]">
                  <img src={item.logo_2} className="w-14" />
                  <p className="font-bold">{item.team_2}</p>
                </div>
              </div>
              <div className="hidden lg:inline">
                <button className="bg-red-300 px-10 h-10">GRUPE</button>
              </div>
              <div className="px-3">
                <SlArrowRight />
              </div>
            </div>

            <div className="border-b mt-5" />
          </div>
        ))}
      </div>
    </LayoutMain>
  );
}

export default Schedule;
{
  /* <div key={item.id}>
            <div className="px-2 flex flex-col lg:flex-row lg:items-center">
              <div className="flex items-center space-x-5">
                <div className="flex justify-between w-full px-4 lg:flex lg:flex-col lg:justify-center lg:w-[200px]">
                  <p className="text-xl font-semibold">{item.date}</p>
                  <p className="text-lg font-semibold">{item.hour}</p>
                </div>
                <div className="hidden lg:inline border-l h-12" />
                <img src={item.logo_campionat} className="hidden lg:inline w-16" />
                <div className="hidden lg:inline border-l h-12" />
              </div>
              <div className="flex items-center w-full">
                <h1 className="w-[300px] lg:w-[200px] xl:w-[300px] text-right text-xl font-semibold">
                  {item.team_1}
                </h1>
                <div className="flex items-center justify-around w-full lg:w-[250px] xl:w-[300px]">
                  <img src={item.logo_1} className="w-16" />
                  <h1 className="text-xl font-semibold text-red-800">VS.</h1>
                  <img src={item.logo_2} className="w-16" />
                </div>
                <h1 className="w-[300px] lg:w-[200px] xl:w-[300px] text-xl font-semibold">
                  {item.team_2}
                </h1>
                <div className="hidden lg:inline border-l h-12" />
              </div>
              <div className="hidden lg:flex items-center justify-center w-full">
                <p className="text-lg font-semibold lg:hidden 2xl:inline w-[300px]">
                  {item.location}
                </p>
                <GoLocation
                  size={24}
                  className="hidden lg:inline 2xl:hidden"
                  onClick={() => showDetails}
                />
              </div>
              <div className="lg:hidden flex items-center justify-center text-lg font-semibold py-3">
                {item.location}
              </div>
            </div>
            <div className="border-b mb-2" />
          </div> */
}
const nextMatch = {
  id: 1,
  team_1: "Real Valladolid",
  logo_1:
    "https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/primera/valladolid_mediano.png",
  logo_campionat:
    "https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/competiciones/LigaSantander.png",
  team_2: "Real Madrid",
  logo_2:
    "https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/primera/Rm_mediano.png",
  date: "Fri 30DEC",
  hour: "21:30 h",
  location: "Estadio José Zorrilla",
};
const matches = [
  {
    id: 1,
    team_1: "Real Valladolid",
    logo_1:
      "https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/primera/valladolid_mediano.png",
    logo_campionat:
      "https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/competiciones/LigaSantander.png",
    camp_description: "La Liga",
    team_2: "Real Madrid",
    logo_2:
      "https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/primera/Rm_mediano.png",
    date: "Fri 30 DEC",
    hour: "21:30 h",
    location: "Estadio José Zorrilla",
  },
  {
    id: 2,
    team_1: "Villarreal",
    logo_1:
      "https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/primera/villarreal_mediano.png",
    logo_campionat:
      "https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/competiciones/LigaSantander.png",
    camp_description: "La Liga",
    team_2: "Real Madrid",
    logo_2:
      "https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/primera/Rm_mediano.png",
    date: "Sat 07 JAN",
    hour: "16:15 h",
    location: "Estadio de la Cerámica",
  },
  {
    id: 3,
    team_1: "Real Madrid",
    logo_1:
      "https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/primera/Rm_mediano.png",
    logo_campionat:
      "https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/competiciones/LigaSantander.png",
    camp_description: "La Liga",
    team_2: "Valencia",
    logo_2:
      "https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/primera/valencia_mediano.png",
    date: "Wed 11 JAN",
    hour: "Neconfirmat",
    location: "King Fahd (Riad)",
  },
  {
    id: 4,
    team_1: "Athletic",
    logo_1:
      "https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/primera/athletic_mediano.png",
    camp_description: "La Liga",
    team_2: "Real Madrid",
    logo_2:
      "https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/primera/Rm_mediano.png",
    date: "21-22 Jan",
    hour: "Neconfirmat",
    location: "San Mamés",
  },
];
