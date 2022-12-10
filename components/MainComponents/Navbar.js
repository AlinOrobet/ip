import Link from "next/link";
import React, {useEffect, useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
function Navbar({linkActive}) {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("white");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{backgroundColor: `${color}`}}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="m-auto flex justify-between items-center p-4 text-white">
        <Link href="/" className="flex items-center space-x-5">
          <img src="/logo_CSM.png" className="h-16 ml-3" />
          <h1 className="font-bold text-4xl md:text-4xl text-blue-800">
            CSM{" "}
            <span style={{color: `${textColor}`}} className="italic">
              Suceava
            </span>
          </h1>
        </Link>
        <ul style={{color: `${textColor}`}} className="hidden md:flex">
          <li className="p-2 lg:p-4">
            <Link href="#articles">Articole</Link>
          </li>
          <li className="p-2 lg:p-4">
            <Link href="#matches">Meciuri</Link>
          </li>
          <li className="p-2 lg:p-4">
            <Link href="#players">Jucatori</Link>
          </li>
          <li className="p-2 lg:p-4">
            <Link href="#about">Despre noi</Link>
          </li>
          <li className="p-2 lg:p-4">
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
        {/* Mobile Button */}
        <div onClick={handleNav} className={`block md:hidden z-10`}>
          {nav ? (
            <AiOutlineClose size={20} className="text-white" />
          ) : (
            <AiOutlineMenu size={20} style={{color: `${textColor}`}} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-500"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-500"
          }
        >
          <ul>
            <li className="text-white p-4 text-4xl hover:text-gray-500">
              <Link href="/">Home</Link>
            </li>
            <li className="text-white p-4 text-4xl hover:text-gray-500">
              <Link href="/">Articole</Link>
            </li>
            <li className="text-white p-4 text-4xl hover:text-gray-500">
              <Link href="/">Jucatori</Link>
            </li>
            <li className="text-white p-4 text-4xl hover:text-gray-500">
              <Link href="/">Despre noi</Link>
            </li>
            <li className="text-white p-4 text-4xl hover:text-gray-500">
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
