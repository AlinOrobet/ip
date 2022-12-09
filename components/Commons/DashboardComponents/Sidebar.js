import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import SidebarTitle from "./SidebarTitle";

import {IoArrowBackOutline} from "react-icons/io5";
import {HiMenuAlt3} from "react-icons/hi";
function Sidebar({data, title}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <div
      className={` ${
        open ? "w-72" : "w-20"
      } duration-500 bg-purple-800 min-h-screen text-gray-100 px-4`}
    >
      <div className={`py-5 flex ${open ? "justify-between" : "justify-center"}  items-center`}>
        <Image
          src="/logo_CSM.png"
          alt="logo"
          width={40}
          height={40}
          className={`cursor-pointer duration-500 ${!open ? "hidden" : "inline"}`}
          onClick={() => router.push(link)}
        />
        <h1
          className={`text-white cursor-pointer font-bold text-xl ${!open ? "hidden" : "inline"}`}
        >
          {title}
        </h1>
        <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)} />
      </div>
      {data.map((item) => (
        <div key={item.id}>
          <SidebarTitle data={item} open={open} />
        </div>
      ))}
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
