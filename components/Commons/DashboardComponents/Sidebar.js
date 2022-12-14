import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import SidebarTitle from "./SidebarTitle";
import {HiMenuAlt3} from "react-icons/hi";
function Sidebar({data, title}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={` ${open ? "w-72" : "w-20"} duration-500 bg-purple-800 h-full text-gray-100 px-4`}
    >
      <div className={`py-5 flex ${open ? "justify-between" : "justify-center"}  items-center`}>
        <Link href="/admin" className={`flex items-center space-x-7`}>
          <Image
            src="/logo_CSM.png"
            alt="logo"
            width={30}
            height={30}
            className={`cursor-pointer duration-500 ${!open ? "hidden" : "inline"}`}
          />
          <h1
            className={`text-white cursor-pointer font-bold text-xl ${!open ? "hidden" : "inline"}`}
          >
            {title}
          </h1>
        </Link>
        <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)} />
      </div>
      <div className="h-[calc(100vh-100px)] flex flex-col justify-between">
        <div>
          {data.slice(0, data.length - 2).map((item) => (
            <div key={item.id}>
              <SidebarTitle data={item} open={open} />
            </div>
          ))}
        </div>
        <div className="">
          <SidebarTitle data={data[data.length - 2]} open={open} />
          <SidebarTitle data={data[data.length - 1]} open={open} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
{
  /* <div className={` ${open ? "w-[20rem]" : "w-[8rem]"}  h-screen bg-purple-800 p-3`}>
<div className="flex justify-around items-center">
  <Image
    src="/logo_CSM.png"
    alt="logo"
    width={60}
    height={40}
    className={`cursor-pointer duration-500`}
    onClick={() => router.push(link)}
  />
  <h1
    className={`text-white cursor-pointer font-bold text-2xl duration-300 ${
      !open ? "hidden " : "inline"
    }`}
  >
    {title}
  </h1>
  <IoArrowBackOutline
    size={30}
    className={`text-white cursor-pointer rounded-full border-2 border-white ${
      !open && "rotate-180 duration-800"
    }`}
    onClick={() => setOpen(!open)}
  />
</div>
{/* {data.map((item) => (
  <div key={item.id} className={`${item.id === 1 ? "pt-6" : ""}`}>
    <SidebarTitle data={item} open={open} />
  </div>
))} */
}
