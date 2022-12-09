import {RiMoreFill} from "react-icons/ri";
import {
  AiOutlineCheckCircle,
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineFileAdd,
} from "react-icons/ai";
import {useRouter} from "next/router";

function HistoryAdmin({max}) {
  const router = useRouter();
  const data = [
    {nr: 1, details: "Jucator", icon: "Stergere", status: "finalizat", date: "14-07-2000"},
    {nr: 2, details: "Meci", icon: "Modificare", status: "in curs", date: "14-07-2000"},
    {nr: 3, details: "Jucator", icon: "Adaugare", status: "finalizat", date: "14-07-2000"},
    {nr: 4, details: "Articol", icon: "Modificare", status: "finalizat", date: "14-07-2000"},
    {nr: 5, details: "Jucator", icon: "Adaugare", status: "in curs", date: "14-07-2000"},
    {nr: 6, details: "Meci", icon: "Stergere", status: "finalizat", date: "14-07-2000"},
    {nr: 7, details: "Articol", icon: "Adaugare", status: "finalizat", date: "14-07-2000"},
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
    <div className="bg-white shadow-xl hover:shadow-md duration-300 lg:col-span-4 xl:col-span-3 mb-10 lg:mb-0">
      <div className="flex items-center justify-between px-3 lg:px-10">
        <h1 className="p-3 text-3xl mb-2 font-bold">Admin History</h1>
        <button
          className="bg-purple-600 w-36 h-10 rounded-3xl text-white font-bold text-xl "
          onClick={() => router.push("/admin/admin-history")}
        >
          See all
        </button>
      </div>
      <table className="w-full">
        <thead className="bg-gray-50 border-b border-gray-300 text-lg">
          <tr>
            <th></th>
            <th>Detalii</th>
            <th>Status</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody className="text-center border-b border-gray-100">
          {data
            .slice(Math.max(data.length - max, 0))
            .reverse()
            .map((elem) => (
              <tr key={elem.nr} className="button">
                <td className="flex justify-center">{whichIcon(elem.icon)}</td>
                <td>{elem.details}</td>
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
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default HistoryAdmin;
