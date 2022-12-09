import {RiMoreFill} from "react-icons/ri";
import {
  AiOutlineCheckCircle,
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineFileAdd,
} from "react-icons/ai";
import {useRouter} from "next/router";
function HistoryCC({max, link}) {
  const router = useRouter();
  const data = [
    {
      nr: 1,
      creator: "creator_1",
      icon: "Stergere",
      details: "Articol 00001",
      status: "finalizat",
      date: "23-12-2022",
      ora: "20:00",
    },
    {
      nr: 2,
      creator: "creator_2",
      icon: "Modificare",
      details: "Articol 00002",
      status: "in curs...",
      date: "23-12-2022",
      ora: "20:00",
    },
    {
      nr: 3,
      creator: "creator_3",
      icon: "Modificare",
      details: "Articol 00003",
      status: "in curs...",
      date: "23-12-2022",
      ora: "20:00",
    },
    {
      nr: 4,
      creator: "creator_4",
      icon: "Modificare",
      details: "Articol 00004",
      status: "finalizat",
      date: "23-12-2022",
      ora: "20:00",
    },
    {
      nr: 5,
      creator: "creator_5",
      icon: "Stergere",
      details: "Articol 00005",
      status: "in curs...",
      date: "23-12-2022",
      ora: "20:00",
    },
    {
      nr: 6,
      creator: "creator_6",
      icon: "Stergere",
      details: "Articol 00006",
      status: "finalizat",
      date: "23-12-2022",
      ora: "20:00",
    },
    {
      nr: 7,
      creator: "creator_7",
      icon: "Adaugare",
      details: "Articol 00007",
      status: "in curs...",
      date: "23-12-2022",
      ora: "20:00",
    },
    {
      nr: 8,
      creator: "creator_8",
      icon: "Adaugare",
      details: "Articol 00008",
      status: "finalizat",
      date: "23-12-2022",
      ora: "20:00",
    },
    {
      nr: 9,
      creator: "creator_9",
      icon: "Modificare",
      details: "Articol 00009",
      status: "in curs...",
      date: "23-12-2022",
      ora: "20:00",
    },
    {
      nr: 10,
      creator: "creator_10",
      icon: "Adaugare",
      details: "Articol 00010",
      status: "finalizat",
      date: "23-12-2022",
      ora: "20:00",
    },
    {
      nr: 11,
      creator: "creator_11",
      icon: "Modificare",
      details: "Articol 00011",
      status: "finalizat",
      date: "23-12-2022",
      ora: "20:00",
    },
    {
      nr: 12,
      creator: "creator_12",
      icon: "Modificare",
      details: "Articol 00012",
      status: "in curs...",
      date: "23-12-2022",
      ora: "20:00",
    },
    {
      nr: 13,
      creator: "creator_13",
      icon: "Adaugare",
      details: "Articol 00013",
      status: "finalizat",
      date: "23-12-2022",
      ora: "20:00",
    },
    {
      nr: 14,
      creator: "creator_14",
      icon: "Stergere",
      details: "Articol 00014",
      status: "in curs...",
      date: "23-12-2022",
      ora: "20:00",
    },
    {
      nr: 15,
      creator: "creator_15",
      icon: "Stergere",
      details: "Articol 00015",
      status: "finalizat",
      date: "23-12-2022",
      ora: "20:00",
    },
    {
      nr: 16,
      creator: "creator_16",
      icon: "Stergere",
      details: "Articol 00016",
      status: "finalizat",
      date: "23-12-2022",
      ora: "20:00",
    },
    {
      nr: 17,
      creator: "creator_17",
      icon: "Stergere",
      details: "Articol 00017",
      status: "finalizat",
      date: "23-12-2022",
      ora: "20:00",
    },
  ];
  const whichIcon = (icon) => {
    if (icon === "Stergere") {
      return <AiOutlineDelete size={22} />;
    } else if (icon === "Modificare") {
      return <AiOutlineEdit size={22} />;
    } else {
      return <AiOutlineFileAdd size={22} />;
    }
  };
  return (
    <div className="bg-white shadow-xl hover:shadow-md duration-300 lg:col-span-6 xl:col-span-7">
      <div className="flex items-center justify-between px-3 lg:px-10">
        <h1 className="p-3 text-3xl mb-2 font-bold">Creator Continut History</h1>
        <button
          className="bg-purple-500 w-36 h-10 rounded-3xl text-white font-bold text-xl "
          onClick={() => router.push(link)}
        >
          See all
        </button>
      </div>
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-300 text-lg">
          <tr>
            <th></th>
            <th>Creator</th>
            <th>Titlu Articol</th>
            <th>Status</th>
            <th>Data</th>
            <th>Ora</th>
          </tr>
        </thead>
        <tbody className="text-center border-b border-gray-100">
          {data
            .slice(Math.max(data.length - max, 0))
            .reverse()
            .map((elem) => (
              <tr key={elem.nr} className="button ">
                <td className="flex justify-center">{whichIcon(elem.icon)}</td>
                <td>{elem.creator}</td>
                <td>{elem.details.substring(0, 21)}</td>
                <td className="flex justify-center">
                  <span>
                    {elem.status === "finalizat" ? (
                      <AiOutlineCheckCircle className="text-green-500" />
                    ) : (
                      <RiMoreFill className="text-red-500" />
                    )}
                  </span>
                </td>
                <td>{elem.date}</td>
                <td>{elem.ora}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default HistoryCC;
