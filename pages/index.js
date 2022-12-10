import Head from "next/head";
import Hero from "../components/MainComponents/Hero";
import NextMatches from "../components/MainComponents/NextMatches";
import LastArticles from "../components/MainComponents/LastArticles";
import Players from "../components/MainComponents/Players";
import About from "../components/MainComponents/About";
import LayoutMain from "../layout/layoutMain";
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
      author: "GSP TV",
      date: "23-12-2022",
    },
    {
      id: 2,
      title:
        "Ea este bomba sexy care se iubește cu starul care a făcut senzație la Mondial și pe care se bat marile echipe ",
      subtitle:
        "Cody Gakpo (23 ani) a făcut spectacol în tricoul Olandei la Campionatul Mondial din Qatar.",
      url: "https://res.sport.ro/assets/sport/2022/12/04/image_galleries/767279/ea-este-bomba-sexy-care-se-iubeste-cu-starul-care-a-facut-senzatie-la-mondial-si-pe-care-se-bat-marile_7_1_size6.jpg",
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
  const players = [
    {
      id: 1,
      firstName: "Karim",
      lastName: "Benzema",
      image:
        "https://scontent.fias1-1.fna.fbcdn.net/v/t39.30808-6/317364303_621971989715097_7767490931694701365_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=h-xkCSFmMsAAX8kd5UP&tn=dhFpMa3-q7LHns4_&_nc_ht=scontent.fias1-1.fna&oh=00_AfA1XWEpPKcVVOsL7WlKlrRiV8ptgA1SGiROLOcZEmaC1g&oe=639A542F",
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
  const gallery = [
    {
      id: 1,
      image:
        "https://res.sport.ro/assets/sport/2022/12/10/image_galleries/767708/messi-in-direct-la-tv-catre-weghorst-zla-ce-te-uiti-prostule-interviul-in-care-leo-nu-a-iertat-pe-nimeni_size7.jfif",
    },
    {
      id: 2,
      image:
        "https://res.sport.ro/assets/sport/2022/12/10/image_galleries/767702/rivalizeaza-cu-miss-croatia-argentiniencele-au-incins-atmosfera-la-meciul-cu-olanda_size12.jpg",
    },
    {
      id: 3,
      image:
        "https://res.sport.ro/assets/sport/2022/12/10/image_galleries/767701/zmiss-croatia-i-a-ztaxat-pe-brazilieni-zsa-faceti-dansul-porumbelului-in-drum-spre-casa_15_size12.jpg",
    },
    {
      id: 4,
      image:
        "https://res.sport.ro/assets/sport/2022/12/09/image_galleries/767585/ultima-ora-austria-tocmai-a-anuntat-cum-voteaza-astazi-fata-de-intrarea-romaniei-in-schengen_1_size12.jpg",
    },
    {
      id: 5,
      image:
        "https://res.sport.ro/assets/sport/2022/12/09/image_galleries/674419/sunt-multifunctionala-florin-calinescu-i-a-dat-singur-4-de-da-formele-ei-si-miscarile-pe-care-le-a-facut-1_1_size12.jpg",
    },
    {
      id: 6,
      image:
        "https://res.sport.ro/assets/sport/2022/12/09/image_galleries/767689/ce-a-postat-miss-croatia-dupa-ce-modric-co-au-eliminat-brazilia-la-penalty-uri_27_size7.jpg",
    },
    {
      id: 7,
      image:
        "https://res.sport.ro/assets/sport/2022/12/09/image_galleries/767698/thiago-silva-si-a-luat-inima-in-dinti-si-a-spus-ce-avea-pe-suflet-dupa-eliminarea-de-la-cupa-mondiala_size12.jpg",
    },
    {
      id: 8,
      image:
        "https://res.sport.ro/assets/sport/2022/12/09/image_galleries/767699/nervi-incinsi-in-olanda-argentina-virgil-van-dijk-si-a-zcalmat-adversarul-cu-un-procedeu-de-wrestling_4_1_size7.jpg",
    },
    {
      id: 9,
      image:
        "https://res.sport.ro/assets/sport/2022/12/07/image_galleries/732985/la-40-de-ani-christina-aguilera-a-renuntat-la-haine-si-la-inhibitii-a-recreat-coperta-indrazneata-a-albumului_size12.jpg",
    },
  ];

  return (
    <div>
      <Head>
        <title>CSM Suceava</title>
      </Head>
      <LayoutMain>
        <div className="flex justify-center items-center mt-10">
          <div className="w-full">
            <Hero data={heroData} />
          </div>
        </div>
        <div className="flex justify-center flex-col items-start">
          <LastArticles data={data} />
        </div>
        <div className="flex justify-center flex-col items-start">
          <NextMatches data={matches} />
        </div>
        <div className="flex justify-center flex-col items-start">
          <Players data={players} />
        </div>
        <div className="flex justify-center flex-col items-start">
          <About data={gallery} />
        </div>
      </LayoutMain>
    </div>
  );
}
