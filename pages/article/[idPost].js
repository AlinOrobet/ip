import React from "react";
import LayoutMain from "../../layout/layoutMain";
function Article() {
  return (
    <LayoutMain>
      <div className="flex flex-col items-center justify-center mt-[7rem] text-white space-y-10">
        <img
          src={data[1].url}
          alt={data[1].title}
          className="w-[1000px] h-[500px] bg-no-repeat bg-cover"
        />
        <h1>{data[1].title}</h1>
      </div>
    </LayoutMain>
  );
}

export default Article;
const data = [
  {
    id: 1,
    title:
      "Le Roi Mbappe! Starul francez a marcat două goluri de generic și a depășit un record deținut de Pele de 66 de ani ",
    subtitle:
      "Echipa naţională a Franţei a învins duminică, scor 3-1, reprezentativa Poloniei, în optimile de finală ale Campionatului Mondial.",
    description:
      "Echipa naţională a Franţei a învins duminică, scor 3-1, reprezentativa Poloniei, în optimile de finală ale Campionatului Mondial.",
    url: "https://res.sport.ro/assets/sport/2022/12/04/image_galleries/767276/le-roi-mbappe-starul-francez-a-marcat-doua-goluri-de-generic-si-a-depasit-un-record-detinut-de-pele-de_1_size6.jpg",
    author: "GSP TV",
    date: "23-12-2022",
  },
  {
    id: 2,
    title:
      "Ea este bomba sexy care se iubește cu starul care a făcut senzație la Mondial și pe care se bat marile echipe ",
    subtitle:
      "Cody Gakpo (23 ani) a făcut spectacol în tricoul Olandei la Campionatul Mondial din Qatar.",
    url: "https://res.sport.ro/assets/sport/2022/12/04/image_galleries/767279/ea-este-bomba-sexy-care-se-iubeste-cu-starul-care-a-facut-senzatie-la-mondial-si-pe-care-se-bat-marile_7_1_size7.jpg",
    author: "GSP TV",
    date: "23-12-2022",
  },
  {
    id: 3,
    title: "Dan Petrescu se teme de FC Botoșani, echipă distrusă de Farul Constanța, scor 8-0",
    subtitle:
      "CFR Cluj a învins-o pe Chindia Târgovişte cu scorul de 2-0, pe teren propriu, într-un meci din etapa a 19-a a Superligii.",
    url: "https://res.sport.ro/assets/sport/2022/12/04/image_galleries/767274/dan-petrescu_size6.jpg",
    author: "GSP TV",
    date: "23-12-2022",
  },
  {
    id: 3,
    title:
      "Frumusețile Campionatului Mondial din Qatar! Imagini spectaculoase cu fanele care au făcut senzație în tribune ",
    subtitle:
      "CFR Cluj a învins-o pe Chindia Târgovişte cu scorul de 2-0, pe teren propriu, într-un meci din etapa a 19-a a Superligii.",
    url: "https://res.sport.ro/assets/sport/2022/12/03/image_galleries/766304/frumusetile-campionatului-mondial-din-qatar-imagini-spectaculoase-cu-fanele-care-au-facut-senzatie-in_5_size6.jpg",
    author: "GSP TV",
    date: "23-12-2022",
  },
];
