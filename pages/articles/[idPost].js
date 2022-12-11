import React from "react";
import LayoutMain from "../../layout/layoutMain";
import {
  BsFillCalendarDateFill,
  BsFacebook,
  BsWhatsapp,
  BsTelegram,
  BsTwitter,
} from "react-icons/bs";
import {AiOutlineCopy} from "react-icons/ai";
function Article() {
  return (
    <LayoutMain>
      <div className="mt-[7rem] text-white container mx-auto px-10 mb-8">
        <div className="rounded-lg lg:p-8 pb-1 mb-8 text-white">
          <div className="relative overflow-hidden shadow-md mb-6">
            <img
              src={post.url}
              alt={post.title}
              className="bg-cover rounded-t-lg h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px] w-[1500px]"
            />
          </div>
          <div className="px-4 lg:px-0">
            <div className="flex justify-between items-center mb-8 w-full ">
              <div className="flex items-center">
                <p className="font-bold text-xl">{post.author}</p>
              </div>
              <div className="flex items-center space-x-3">
                <BsFillCalendarDateFill size={23} className="text-gray-500" />
                <p className="font-bold text-xl">{post.date}</p>
              </div>
            </div>
            <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
            <p className="text-lg">{post.description}</p>
          </div>
          {/* METODA DE A DA SHARE PE ASTEA ?? */}
          {/* <div className="mt-20 flex flex-col items-center justify-center space-x-5">
            <h1 className="text-2xl font-bold">Distribuie si pe ...</h1>
            <div className="flex space-x-7 mt-3">
              <AiOutlineCopy size={25} className="hover:text-gray-800" />
              <BsFacebook size={25} className="hover:text-gray-800" />
              <BsWhatsapp size={25} className="hover:text-gray-800" />
              <BsTelegram size={25} className="hover:text-gray-800" />
              <BsTwitter size={25} className="hover:text-gray-800" />
            </div>
          </div> */}
        </div>
      </div>
    </LayoutMain>
  );
}

export default Article;
const post = {
  id: 1,
  title:
    "Ea este bomba sexy care se iubește cu starul care a făcut senzație la Mondial și pe care se bat marile echipe ",
  subtitle:
    "Cody Gakpo (23 ani) a făcut spectacol în tricoul Olandei la Campionatul Mondial din Qatar.",
  description:
    "Echipa naţională a Franţei a învins duminică, scor 3-1, reprezentativa Poloniei, în optimile de finală ale Campionatului Mondial. Ea este bomba sexy care se iubește cu starul care a făcut senzație la Mondial și pe care se bat marile echipe Ea este bomba sexy care se iubește cu starul care a făcut senzație la Mondial și pe care se bat marile echipe Ea este bomba sexy care se iubește cu starul care a făcut senzație la Mondial și pe care se bat marile echipe Ea este bomba sexy care se iubește cu starul care a făcut senzație la Mondial și pe care se bat marile echipe Ea este bomba sexy care se iubește cu starul care a făcut senzație la Mondial și pe care se bat marile echipe Ea este bomba sexy care se iubește cu starul care a făcut senzație la Mondial și pe care se bat marile echipe Ea este bomba sexy care se iubește cu starul care a făcut senzație la Mondial și pe care se bat marile echipe ",
  url: "https://res.sport.ro/assets/sport/2022/12/04/image_galleries/767279/ea-este-bomba-sexy-care-se-iubeste-cu-starul-care-a-facut-senzatie-la-mondial-si-pe-care-se-bat-marile_7_1_size7.jpg",
  author: "GSP TV",
  date: "23-12-2022",
};
