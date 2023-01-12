import Link from "next/link";

function SidebarTitle({data, open}) {
  return (
    <div className={`mt-3 flex flex-col gap-4 relative`}>
      <Link
        href={data.link}
        className={`${data?.margin && "mt-5"}
         group flex items-center text-md gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
      >
        <div>{data.icon}</div>
        <h2
          style={{transitionDelay: `${data.id}00ms`}}
          className={`whitespace-pre duration-500 ${
            !open && "opacity-0 translate-x-28 overflow-hidden"
          }`}
        >
          {data.title}
        </h2>
        <h2
          className={`${
            open && "hidden"
          } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-500 group-hover:w-fit`}
        >
          {data.title}
        </h2>
      </Link>
    </div>
  );
}

export default SidebarTitle;
