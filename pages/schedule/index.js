import React from "react";
import LayoutMain from "../../layout/layoutMain";
function Schedule() {
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
      <div className="text-white flex items-center justify-center mt-10 px-6">
        <h1 className="text-2xl font-bold uppercase">Toate Meciurile</h1>
      </div>
      <div className="mt-10 h-screen bg-white rounded-t-2xl container mx-auto mb-8">
        <h1 className="p-4 text-3xl font-bold uppercase">FIRST TEAM Schedule</h1>
        {matches.map((item) => (
          <div key={item.id} className="flex flex-col px-8">
            <h1 className="text-2xl font-semibold">December 2022</h1>
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center space-x-10">
                <div className="">
                  <p className="text-xl font-semibold">{item.date}</p>
                  <p className="text-lg font-semibold">{item.hour}</p>
                </div>
                <div className="border-l h-12" />
                <img src={item.logo_campionat} className="w-16" />
                <div className="border-l h-12" />
              </div>
              <div className="flex items-center">
                <div className="flex items-center">
                  <h1 className="text-xl font-semibold">{item.team_1}</h1>
                  <img src={item.logo_1} className="w-16" />
                </div>
                <h1 className="text-xl font-semibold text-red-800">VS.</h1>
                <div className="flex items-center">
                  <img src={item.logo_2} className="w-16" />
                  <h1 className="text-xl font-semibold">{item.team_2}</h1>
                </div>
              </div>
              <p className="text-lg font-semibold">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </LayoutMain>
  );
}

export default Schedule;
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
    team_2: "Real Madrid",
    logo_2:
      "https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/primera/Rm_mediano.png",
    date: "Fri 30DEC",
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
    team_2: "Real Madrid",
    logo_2:
      "https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/primera/Rm_mediano.png",
    date: "Sat 07JAN",
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
    team_2: "Valencia",
    logo_2:
      "https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/primera/valencia_mediano.png",
    date: "Wed 11JAN",
    hour: "Neconfirmat",
    location: "King Fahd (Riad)",
  },
  {
    id: 4,
    team_1: "Athletic",
    logo_1:
      "https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/primera/athletic_mediano.png",
    team_2: "Real Madrid",
    logo_2:
      "https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/primera/Rm_mediano.png",
    date: "21-22 Jan",
    hour: "Time to be confirmed",
    location: "San Mamés",
  },
];
