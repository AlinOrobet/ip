import Link from "next/link";
import React, {useEffect, useState} from "react";
import NavLinks from "./NavLinks";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
function Navbar({linkActive, setCategory}) {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("#0D47A1");
  const [textColor, setTextColor] = useState("white");
  const handleNav = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#0D47A1");
      } else {
        setColor("#0D47A1");
        setTextColor("white");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);
  return (
    <div
      style={{backgroundColor: `${color}`}}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300 "
    >
      <div className="m-auto flex justify-between items-center p-4 text-white">
        <Link href="/" className="flex items-center space-x-5 z-50 lg:w-auto w-full">
          <img src="/logo_CSM.png" className="h-16 ml-3" />
          <h1
            className="font-bold text-4xl md:text-4xl text-blue-800"
            style={{color: `${textColor}`}}
          >
            CSM <span className="italic">Suceava</span>
          </h1>
        </Link>
        <ul
          style={{color: `${textColor}`}}
          className="hidden lg:flex uppercase uppercase items-center gap-8"
        >
          <NavLinks color={color} textColor={textColor} setCategory={setCategory} />
        </ul>
        {/* Mobile Button */}
        <div onClick={handleNav} className={`block lg:hidden z-10`}>
          {open ? (
            <AiOutlineClose size={30} style={{color: `${textColor}`}} />
          ) : (
            <AiOutlineMenu size={30} style={{color: `${textColor}`}} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          style={{backgroundColor: `${color}`, color: `${textColor}`}}
          className={
            open
              ? "lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black ease-in duration-500 py-24 pl-4"
              : "lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black ease-in duration-500 py-24 pl-4"
          }
        >
          <ul>
            <NavLinks color={color} textColor={textColor} setCategory={setCategory} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
