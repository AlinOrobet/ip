import React, {useState} from "react";
import {IoMdArrowDropdown} from "react-icons/io";
import Link from "next/link";
function NavLinks({color, textColor, setCategory}) {
  const links = [
    {id: 1, name: "Articole", link: "articles"},
    {id: 2, name: "Jucatori", link: "players"},
    {id: 3, name: "Meciuri", link: "schedule"},
    {id: 4, name: "Contact", link: "contact"},
  ];
  const linkAboutUs = {
    id: 5,
    name: "Despre Noi",
    submenu: true,
    icon: <IoMdArrowDropdown size={45} />,
    sublinks: [
      {
        id: 0,
        name: "Prima Echipa",
        link: "/",
      },
      {
        id: 1,
        name: "Juniori",
        link: "/",
      },
      {id: 2, name: "Cadeti", link: "/"},
      {id: 3, name: "Sperante", link: "/"},
      {id: 4, name: "Mini Volei", link: "/"},

      ,
    ],
  };
  const [heading, setHeading] = useState("");
  const [open, setOpen] = useState(false);
  const handleClick = (link_name) => {
    setHeading(link_name);
    if (link_name === "Despre Noi") {
      setOpen(!open);
    }
  };
  const handleChangeCategory = (type) => {
    setCategory(type);
  };
  return (
    <>
      {links.map((link) => (
        <div key={link.id} className="text-5xl lg:text-lg hover:font-bold">
          <div className="text-left cursor-pointer group">
            <div className="flex items-center">
              <Link href={`/${link.link}`}>
                <h1
                  className=""
                  onClick={() => (heading !== link.name ? handleClick(link.name) : handleClick(""))}
                >
                  {link.name}
                </h1>
              </Link>
            </div>
          </div>
        </div>
      ))}
      <div className="text-5xl lg:text-lg">
        <div className="text-left cursor-pointer group">
          <div className="flex items-center">
            <h1
              className=""
              onClick={() =>
                heading !== "Despre Noi" ? handleClick("Despre Noi") : handleClick("")
              }
            >
              Despre Noi
            </h1>
            <span
              onClick={() => (heading !== "Despre Noi" ? setHeading("Despre Noi") : setHeading(""))}
            >
              <IoMdArrowDropdown size={45} />
            </span>
          </div>
          {linkAboutUs.submenu && (
            <div className="">
              <div
                className={`absolute top-20 ${
                  heading === "Despre Noi" ? "hidden lg:inline" : "hidden"
                }`}
              >
                <div style={{backgroundColor: `${color}`}} className="p-3.5 rounded-md">
                  {linkAboutUs.sublinks?.map((sublinks) => (
                    <div key={sublinks.id}>
                      <li className="my-2.5">
                        <Link
                          className="hover:font-bold"
                          href={sublinks.link}
                          onClick={() => handleChangeCategory(sublinks.name)}
                        >
                          {sublinks.name}
                        </Link>
                      </li>
                    </div>
                  ))}
                </div>
              </div>
              {/* MOBILE */}
              <div className={`${heading === "Despre Noi" ? "inline lg:hidden" : "hidden"}`}>
                {linkAboutUs.sublinks?.map((sublinks) => (
                  <div key={sublinks.id}>
                    <li className="my-3 pl-10">
                      <Link className="hover:font-bold" href="">
                        {sublinks.name}
                      </Link>
                    </li>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default NavLinks;
