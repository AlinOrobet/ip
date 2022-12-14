import React, {useState} from "react";
import {IoMdArrowDropdown} from "react-icons/io";
import Link from "next/link";
function NavLinks({color, textColor}) {
  const links = [
    {id: 1, name: "Articole"},
    {id: 2, name: "Jucatori"},
    {id: 3, name: "Meciuri"},
    {
      id: 4,
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
    },
    {id: 5, name: "Contact"},
  ];
  const [heading, setHeading] = useState("");
  const [open, setOpen] = useState(false);
  const handleClick = (link_name) => {
    setHeading(link_name);
    setOpen(!open);
  };

  return (
    <>
      {links.map((link) => (
        <div key={link.id} className="text-5xl lg:text-lg">
          <div className="text-left cursor-pointer group">
            <div className="flex items-center">
              <h1
                className=""
                onClick={() => (heading !== link.name ? handleClick(link.name) : handleClick(""))}
              >
                {link.name}
              </h1>
              <span
                onClick={() => (heading !== link.name ? setHeading(link.name) : setHeading(""))}
              >
                {link.icon}
              </span>
            </div>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:lg:block hover:lg:block">
                  <div style={{backgroundColor: `${color}`}} className="p-3.5 rounded-md">
                    {link.sublinks?.map((sublinks) => (
                      <div key={sublinks.id}>
                        <li className="my-2.5">
                          <Link className="hover:font-bold" href={sublinks.link}>
                            {sublinks.name}
                          </Link>
                        </li>
                      </div>
                    ))}
                  </div>
                </div>
                {/* MOBILE */}
                <div className={`${heading === link.name ? "lg:hidden" : "hidden"}`}>
                  {link.sublinks?.map((sublinks) => (
                    <div key={sublinks.id}>
                      <li className="my-3 pl-10">
                        <Link className="hover:font-bold" href={sublinks.link}>
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
      ))}
    </>
  );
}

export default NavLinks;
