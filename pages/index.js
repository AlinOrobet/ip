import Head from "next/head";
import Hero from "../components/MainComponents/Hero";
import Navbar from "../components/MainComponents/Navbar";
import NextMatches from "../components/MainComponents/NextMatches";
import LastArticles from "../components/MainComponents/LastArticles";
import Players from "../components/MainComponents/Players";
export default function Home() {
  const heroData = {
    id: "1",
    emblema1:
      "https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/primera/Rm_mediano.png",
    emblema2:
      "https://www.realmadrid.com/StaticFiles/RealMadrid/directo/statics/baloncesto/acb/ValenciaBasket_mediano.png",
    scor: "3-0",
    title: "Vai steaua noastra",
    url: "https://scontent.fias1-1.fna.fbcdn.net/v/t39.30808-6/318299692_208334444962355_8426351539250393295_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_ohc=XKPWYCDvb6QAX-aoLw1&tn=dhFpMa3-q7LHns4_&_nc_ht=scontent.fias1-1.fna&oh=00_AfCDFBZToWSTVHBHpqMTvcyJskqaMjElqA7pEwkraCRacg&oe=6391AE7E",
  };
  const data = [
    {
      id: 1,
      title:
        "Le Roi Mbappe! Starul francez a marcat două goluri de generic și a depășit un record deținut de Pele de 66 de ani ",
      subtitle:
        "Echipa naţională a Franţei a învins duminică, scor 3-1, reprezentativa Poloniei, în optimile de finală ale Campionatului Mondial.",
      url: "https://res.sport.ro/assets/sport/2022/12/04/image_galleries/767276/le-roi-mbappe-starul-francez-a-marcat-doua-goluri-de-generic-si-a-depasit-un-record-detinut-de-pele-de_1_size6.jpg",
    },
    {
      id: 2,
      title:
        "Ea este bomba sexy care se iubește cu starul care a făcut senzație la Mondial și pe care se bat marile echipe ",
      subtitle:
        "Cody Gakpo (23 ani) a făcut spectacol în tricoul Olandei la Campionatul Mondial din Qatar.",
      url: "https://res.sport.ro/assets/sport/2022/12/04/image_galleries/767279/ea-este-bomba-sexy-care-se-iubeste-cu-starul-care-a-facut-senzatie-la-mondial-si-pe-care-se-bat-marile_7_1_size6.jpg",
    },
    {
      id: 3,
      title: "Dan Petrescu se teme de FC Botoșani, echipă distrusă de Farul Constanța, scor 8-0",
      subtitle:
        "CFR Cluj a învins-o pe Chindia Târgovişte cu scorul de 2-0, pe teren propriu, într-un meci din etapa a 19-a a Superligii.",
      url: "https://res.sport.ro/assets/sport/2022/12/04/image_galleries/767274/dan-petrescu_size6.jpg",
    },
    {
      id: 3,
      title:
        "Frumusețile Campionatului Mondial din Qatar! Imagini spectaculoase cu fanele care au făcut senzație în tribune ",
      subtitle: "Campionatul Mondial se joacă între 20 noiembrie și 18 decembrie 2022. ",
      url: "https://res.sport.ro/assets/sport/2022/12/03/image_galleries/766304/frumusetile-campionatului-mondial-din-qatar-imagini-spectaculoase-cu-fanele-care-au-facut-senzatie-in_5_size6.jpg",
    },
  ];
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
  return (
    <div>
      <Head>
        <title>CSM Suceava</title>
      </Head>
      <div className="bg-primary w-full overflow-hidden">
        <div className="flex justify-center items-center">
          <div className="xl:max-w-[1500px] w-full px-6 sm:px-14">
            <Navbar />
          </div>
        </div>
        <div className="bg-primary flex justify-center items-start">
          <div className="xl:max-w-[1500px] w-full">
            <Hero data={heroData} />
          </div>
        </div>
        <div className="flex justify-center flex-col items-start">
          <LastArticles data={data} />
          <NextMatches data={matches} />
          <Players />
        </div>
      </div>
    </div>
  );
}
