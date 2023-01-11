import React, {useState, useEffect} from "react";
import LayoutMain from "../../layout/layoutMain";
import {SlArrowRight} from "react-icons/sl";
import {FaDesktop} from "react-icons/fa";
function Schedule() {
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const m = new Date();
  const [month, setMonth] = useState(months[m.getMonth()]);
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSecounds, setTimerSecounds] = useState(0);

  let interval;
  const startTimer = () => {
    const countDownDate = new Date("2023-01-04 23:30").getTime();
    console.log(countDownDate);
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const secounds = Math.floor((distance % (60 * 1000)) / 1000);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        if (days < 10) {
          setTimerDays("0" + days);
        } else {
          setTimerDays(days);
        }
        if (hours < 10) {
          setTimerHours("0" + hours);
        } else {
          setTimerHours(hours);
        }
        if (minutes < 10) {
          setTimerMinutes("0" + minutes);
        } else {
          setTimerMinutes(minutes);
        }
        if (secounds < 10) {
          setTimerSecounds("0" + secounds);
        } else {
          setTimerSecounds(secounds);
        }
      }
    });
  };
  useEffect(() => {
    startTimer();
  });
  return (
    <LayoutMain>
      <div
        className="relative overflow-hidden bg-no-repeat bg-cover bg-center mt-24 h-[400px] lg:h-[550px]"
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
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mt-5 uppercase italic">
                {nextMatch.date}
              </h1>
              <div className="flex items-center justify-center pt-3">
                <h1 className="text-2xl font-bold tracking-tight">COUNT DOWN</h1>
                <div className="px-3 flex space-x-1 font-bold">
                  <div>
                    <span>{timerDays}</span>
                    <p className="text-xs">Days</p>
                  </div>
                  <span>:</span>
                  <div>
                    <p>{timerHours}</p>
                    <p className="text-xs">Hours</p>
                  </div>
                  <span>:</span>
                  <div>
                    <p>{timerMinutes}</p>
                    <p className="text-xs">Mins</p>
                  </div>
                  <span>:</span>
                  <div>
                    <p>{timerSecounds}</p>
                    <p className="text-xs">Secs</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-10 mt-10 ">
                <div className="flex flex-col items-center">
                  <img src={nextMatch.logo_1} className="w-20 lg:w-24" alt={nextMatch.team_1} />
                  <p className="font-semibold">{nextMatch.team_1}</p>
                </div>
                <div className="flex space-x-2">
                  <p className="text-4xl font-bold">{nextMatch.hour}</p>
                  <p className="text-3xl font-bold">:</p>
                  <p className="text-4xl font-bold">{nextMatch.minute}</p>
                </div>
                <div className="flex flex-col items-center ">
                  <img src={nextMatch.logo_2} className="w-20 lg:w-24" alt={nextMatch.team_2} />
                  <p className="font-semibold">{nextMatch.team_2}</p>
                </div>
              </div>
              <h1 className="text-xl lg:text-3xl font-bold tracking-tight mt-5">
                {nextMatch.location}
              </h1>
              <div className="flex items-center justify-center space-x-3 pt-2">
                <span>
                  <FaDesktop />
                </span>
                <p className="underline cursor-pointer">Where to watch</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-10 bg-white rounded-t-2xl container mx-auto mb-8">
        <h1 className="p-4 text-3xl font-bold uppercase">FIRST TEAM Schedule</h1>
        <div className="ml-4 md:ml-6 lg:ml-7 space-y-1 text-sm font-semibold cursor-pointer ">
          <div className="flex space-x-5">
            <p className="hover:scale-150 duration-300" onClick={() => setMonth("JAN")}>
              JAN
            </p>
            <p className="hover:scale-150 duration-300" onClick={() => setMonth("FEB")}>
              FEB
            </p>
            <p className="hover:scale-150 duration-300" onClick={() => setMonth("MAR")}>
              MAR
            </p>
            <p className="hover:scale-150 duration-300" onClick={() => setMonth("APR")}>
              APR
            </p>
            <p className="hover:scale-150 duration-300" onClick={() => setMonth("MAY")}>
              MAY
            </p>
            <p className="hover:scale-150 duration-300" onClick={() => setMonth("JUN")}>
              JUN
            </p>
            <p
              className="hidden md:inline hover:scale-150 duration-300"
              onClick={() => setMonth("JUL")}
            >
              JUL
            </p>
            <p
              className="hidden md:inline hover:scale-150 duration-300"
              onClick={() => setMonth("AUG")}
            >
              AUG
            </p>
            <p
              className="hidden md:inline hover:scale-150 duration-300"
              onClick={() => setMonth("SEP")}
            >
              SEP
            </p>
            <p
              className="hidden md:inline hover:scale-150 duration-300"
              onClick={() => setMonth("OCT")}
            >
              OCT
            </p>
            <p
              className="hidden md:inline hover:scale-150 duration-300"
              onClick={() => setMonth("NOV")}
            >
              NOV
            </p>
            <p
              className="hidden md:inline hover:scale-150 duration-300"
              onClick={() => setMonth("DEC")}
            >
              DEC
            </p>
          </div>
          <div className="flex md:hidden space-x-5">
            <p className="hover:scale-150 duration-300" onClick={() => setMonth("JUL")}>
              JUL
            </p>
            <p className="hover:scale-150 duration-300" onClick={() => setMonth("AUG")}>
              AUG
            </p>
            <p className="hover:scale-150 duration-300" onClick={() => setMonth("SEP")}>
              SEP
            </p>
            <p className="hover:scale-150 duration-300" onClick={() => setMonth("OCT")}>
              OCT
            </p>
            <p className="hover:scale-150 duration-300" onClick={() => setMonth("NOV")}>
              NOV
            </p>
            <p className="hover:scale-150 duration-300" onClick={() => setMonth("DEC")}>
              DEC
            </p>
          </div>
        </div>
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
  hour: "21",
  minute: "30",
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
