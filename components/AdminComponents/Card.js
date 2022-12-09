import {IoPeopleSharp} from "react-icons/io5";
import {MdOutlineArticle} from "react-icons/md";
import {MdNextWeek} from "react-icons/md";

function Card({title, nr}) {
  const content = [
    {id: "Jucatori Definiti", nr: nr, icon: <IoPeopleSharp size={30} />},
    {id: "Articole Publicate", nr: nr, icon: <MdOutlineArticle size={30} />},
    {id: "Meciuri Publicate", nr: nr, icon: <MdNextWeek size={30} />},
  ];
  const element = content.find((element) => {
    return element.id === title;
  });
  return (
    <div className="rounded-lg w-full overflow-hidden shadow-xl hover:shadow-md duration-300">
      <div className="">
        <div className="flex justify-between p-3">
          <div className="text-3xl font-bold p-2">{element.nr}</div>
          <div className="text-dark-purple">{element.icon}</div>
        </div>
        <h2 className="text-center text-xl font-semibold pb-3">{title}</h2>
      </div>
    </div>
  );
}

export default Card;
