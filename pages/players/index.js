import React from "react";
import PlayerCard from "../../components/MainComponents/PlayerCard";
import LayoutMain from "../../layout/layoutMain";
function Players() {
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
          style={{backgroundColor: `rgba(0, 0, 0, 0.65)`}}
        >
          <div className="flex justify-center items-end h-full text-4xl text-white font-bold pb-5">
            First Team
          </div>
        </div>
      </div>
      <div className="my-10 bg-white rounded-t-2xl container mx-auto mb-8">
        <h1 className="p-4 text-3xl font-bold uppercase">FIRST TEAM Schedule</h1>
        <div className="flex items-center justify-center space-x-1.5 md:space-x-3 lg:space-x-5">
          <button className="bg-gray-100 p-1.5 font-semibold text-blue-600 hover:text-gray-100 hover:bg-blue-600 duration-300 ease-out cursor-pointer rounded-md">
            Ridicator
          </button>
          <p className="bg-gray-100 p-1.5 font-semibold text-blue-600 hover:text-gray-100 hover:bg-blue-600 duration-300 ease-out cursor-pointer rounded-md">
            Centru
          </p>
          <p className="bg-gray-100 p-1.5 font-semibold text-blue-600 hover:text-gray-100 hover:bg-blue-600 duration-300 ease-out cursor-pointer rounded-md">
            Extrema
          </p>
          <p className="bg-gray-100 p-1.5 font-semibold text-blue-600 hover:text-gray-100 hover:bg-blue-600 duration-300 ease-out cursor-pointer rounded-md">
            Universal
          </p>
          <p className="bg-gray-100 p-1.5 font-semibold text-blue-600 hover:text-gray-100 hover:bg-blue-600 duration-300 ease-out cursor-pointer rounded-md">
            Libero
          </p>
          <p className="bg-gray-100 p-1.5 font-semibold text-blue-600 hover:text-gray-100 hover:bg-blue-600 duration-300 ease-out cursor-pointer rounded-md">
            Staff
          </p>
        </div>
        <div className="py-5">
          <h1 className="flex justify-center items-center p-5 text-2xl font-extrabold">
            Ridicatori
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-5">
            {playersDataFT.map((item) => (
              <div key={item.id} className="flex items-center justify-center">
                <PlayerCard data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </LayoutMain>
  );
}

export default Players;
const playersDataFT = [
  {
    id: 1,
    firstName: "Karim",
    lastName: "Benzema",
    image: "/assets/player_15.png",
    shirtNumber: 9,
    position: "Centru",
  },
  {
    id: 2,
    firstName: "Vinicius",
    lastName: "Jr.",
    image:
      "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203429560036&ssbinary=true",
    shirtNumber: 20,
    position: "Extrema",
  },
  {
    id: 3,
    firstName: "Eduardo ",
    lastName: "Camavinga",
    image:
      "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203429560244&ssbinary=true",
    shirtNumber: 12,
    position: "Centru",
  },
  {
    id: 4,
    firstName: "Federico ",
    lastName: "Valverde",
    image:
      "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203429559872&ssbinary=true",
    shirtNumber: 15,
    position: "Centru",
  },
  {
    id: 5,
    firstName: "Luka ",
    lastName: "Modric",
    image:
      "https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203429560394&ssbinary=true",
    shirtNumber: 15,
    position: "Centru",
  },
];
