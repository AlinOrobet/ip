import {IoIosArrowForward} from "react-icons/io";

function DataTitles({type, item, activeId}) {
  const newItem = {id: item.id, title: ""};
  if (type === "post") {
    newItem.title = item.title;
  } else if (type === "player") {
    newItem.title = item.firstName + " " + item.lastName;
  } else if (type === "match") {
    newItem.title = item.team_1 + " VS " + item.team_2;
  }
  return (
    <div className="flex flex-col">
      <main className="flex-1 lg:overflow-y-auto">
        <div className="text-md">
          <div
            className={`flex items-center justify-between px-4 py-3 button ${
              activeId === newItem.id ? "bg-gray-100" : ""
            }`}
          >
            <p className="pl-1">{newItem.title}</p>
            <div className="p-2">
              <IoIosArrowForward size={18} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DataTitles;
