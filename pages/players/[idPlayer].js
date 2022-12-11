import React from "react";
import LayoutMain from "../../layout/layoutMain";
function Jucator() {
  return (
    <LayoutMain>
      <div className="mt-28 text-white relative overflow-hidden bg-no-repeat bg-cover bg-center">
        <div className="flex items-center justify-start pl-24">
          <h1 className="text-3xl lg:text-5xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-b from-sky-400 to-sky-200">
            Raphael dias belloli
          </h1>
        </div>
        <div
          className="flex flex-col md:flex-row justify-around bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://www.realmadrid.com/img/ultrapanoramica_1500px/fondocalendariofutbol2_20201002054055.jpg)",
          }}
        >
          <div className="hidden md:flex items-center space-x-5 lg:space-x-10 mx-auto">
            <div className="flex flex-col items-center space-y-3">
              <p className="text-lg font-semibold uppercase">Numar puncte</p>
              <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-500 to-yellow-300">
                32
              </p>
              <p className="text-sm text-gray-400 uppercase">sezon 2022/2023</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <p className="text-lg font-semibold uppercase">Nr Atacuri</p>
              <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-500 to-yellow-300">
                32
              </p>
              <p className="text-sm text-gray-400 uppercase">sezon 2022/2023</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <p className="text-lg font-semibold uppercase">Nr Blocaje</p>
              <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-500 to-yellow-300">
                32
              </p>
              <p className="text-sm text-gray-400 uppercase">sezon 2022/2023</p>
            </div>
          </div>
          <div className="mx-auto">
            <img
              className="h-[350px] lg:h-[500px] bg-no-repeat"
              src="https://www.fcbarcelona.com/photo-resources/2022/11/02/a82e5b51-cf1d-48ca-872f-753ab665386a/mini_22-RAPHINHA.png?width=670&height=790"
            />
            <div className="hidden md:flex relative -top-20 w-full backdrop-blur-sm h-[90px]">
              <div className="flex flex-col mx-auto">
                <h3 className="text-2xl uppercase font-semibold mx-auto">FORWARD</h3>
                <div className="flex space-x-5 text-4xl font-bold normal-case">
                  <p className="text-gray-400">22</p>
                  <p>Raphinha</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:hidden flex items-center justify-center mt-3">
            <div className="flex flex-col">
              <h3 className="text-xl uppercase font-semibold mx-auto">FORWARD</h3>
              <div className="flex justify-center space-x-2 text-3xl font-bold normal-case">
                <p className="text-gray-400">22</p>
                <p>Raphinha</p>
              </div>
              <div className="border-b mt-3" />
              <div className="flex items-center space-x-5 mt-10">
                <div className="flex flex-col items-center space-y-3">
                  <p className="text-lg font-semibold uppercase">Numar puncte</p>
                  <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-500 to-yellow-300">
                    32
                  </p>
                  <p className="text-sm text-gray-400 uppercase">sezon 2022/2023</p>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <p className="text-lg font-semibold uppercase">Nr Atacuri</p>
                  <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-500 to-yellow-300">
                    32
                  </p>
                  <p className="text-sm text-gray-400 uppercase">sezon 2022/2023</p>
                </div>
                <div className="flex flex-col items-center space-y-3">
                  <p className="text-lg font-semibold uppercase">Nr Blocaje</p>
                  <p className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-orange-500 to-yellow-300">
                    32
                  </p>
                  <p className="text-sm text-gray-400 uppercase">sezon 2022/2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-white mt-10" />
        <div className="text-white flex items-center justify-center my-10 px-6">
          <h1 className="text-2xl font-bold uppercase">Despre</h1>
        </div>
        <div className="text-white flex flex-col items-center justify-center my-10 px-6">
          <div className="flex items-center space-x-20 ">
            <div className="flex flex-col items-center font-semibold">
              <p className="text-xl">DATE OF BIRTH</p>
              <p className="text-2xl">14/12/1996</p>
            </div>
            <div className="flex flex-col items-center font-semibold">
              <p className="text-xl">WEIGHT</p>
              <p className="text-2xl">68kg</p>
            </div>
            <div className="flex flex-col items-center font-semibold">
              <p className="text-xl">HEIGHT</p>
              <p className="text-2xl">176cm</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="hidden md:inline mx-auto flex items-center justify-center">
            <img
              className="h-[350px] lg:h-[500px] bg-no-repeat"
              src="https://www.fcbarcelona.com/photo-resources/2022/11/02/a82e5b51-cf1d-48ca-872f-753ab665386a/mini_22-RAPHINHA.png?width=670&height=790"
            />
          </div>
          <div className="flex items-center justify-center mx-5">
            <div>
              <h1 className="text-xl lg:text-4xl font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, eligendi. Facere,
                maxime reiciendis rem magnam magni est pariatur hic sit quos minus quidem,
                praesentium illo asperiores deleniti. Hic, voluptate mollitia.
              </h1>
              <p className="text-gray-400 mt-4 lg:text-xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem adipisci quidem
                est eos, voluptas esse voluptates enim obcaecati architecto quisquam, quasi aliquam
                iure nihil nesciunt deserunt harum autem qui! Soluta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </LayoutMain>
  );
}

export default Jucator;
