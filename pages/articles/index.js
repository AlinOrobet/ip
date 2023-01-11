import React, {useState, useEffect} from "react";
import ArticleCard from "../../components/MainComponents/ArticleCard";
import LayoutMain from "../../layout/layoutMain";
import Hero from "../../components/MainComponents/Hero";
function ArticlePage() {
  const [posts, setPosts] = useState([]);

  return (
    <LayoutMain>
      <div className="text-white space-y-10">
        <Hero data={articles[0]} />
      </div>
      <div className="my-10 bg-white rounded-t-2xl container mx-auto mb-8">
        <h1 className="p-4 text-3xl font-bold uppercase">Ultimele articole despre "CATEGORIE" </h1>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-5">
            {articles.slice().map((item) => (
              <div key={item.id} className="flex items-center justify-center">
                <ArticleCard data={item} />
              </div>
            ))}
          </div>
          PAGINARE
        </div>
      </div>
    </LayoutMain>
  );
}

export default ArticlePage;
const articles = [
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
    id: 4,
    title:
      "Frumusețile Campionatului Mondial din Qatar! Imagini spectaculoase cu fanele care au făcut senzație în tribune ",
    subtitle:
      "CFR Cluj a învins-o pe Chindia Târgovişte cu scorul de 2-0, pe teren propriu, într-un meci din etapa a 19-a a Superligii.",
    url: "https://res.sport.ro/assets/sport/2022/12/03/image_galleries/766304/frumusetile-campionatului-mondial-din-qatar-imagini-spectaculoase-cu-fanele-care-au-facut-senzatie-in_5_size6.jpg",
    author: "GSP TV",
    date: "23-12-2022",
  },
];
{
  /* <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {data.map((item) => (
              <ArticleCard key={item.id} data={item} />
            ))}
          </div>
        </div> */
}
