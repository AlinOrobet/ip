import React from "react";
import {BsFacebook, BsInstagram} from "react-icons/bs";
function Footer() {
  return (
    <div className="p-4 sm:p-6 text-blue-600 mx-auto">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <a href="#" className="flex items-center">
            <img src="/logo_CSM.png" className="mr-3 h-10" alt="CSM SUCEAVA LOGO" />
            <h1 className="self-center text-2xl font-semibold whitespace-nowrap text-blue-600">
              CSM <span className="">Suceava</span>
            </h1>
          </a>
          <div className="mt-10 flex space-x-10">
            {/* SPONSORI */}
            <a href="#" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-8"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                Flowbite
              </span>
            </a>
            <a href="#" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="mr-3 h-8"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap ">
                Flowbite
              </span>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-md font-semibold  uppercase ">Resources</h2>
            <ul className="text-gray-600 ">
              <li className="mb-4 hover:text-white">
                <a href="https://flowbite.com/" className="hover:underline">
                  Flowbite
                </a>
              </li>
              <li className="hover:text-white">
                <a href="https://tailwindcss.com/" className="hover:underline">
                  Tailwind CSS
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-md font-semibold uppercase ">Follow us</h2>
            <ul className="text-gray-600 ">
              <li className="mb-4 hover:text-white">
                <a href="https://github.com/themesberg/flowbite" className="hover:underline ">
                  Github
                </a>
              </li>
              <li className="hover:text-white">
                <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
                  Discord
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-md font-semibold uppercase ">Legal</h2>
            <ul className="text-gray-600">
              <li className="mb-4 hover:text-white">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="hover:text-white">
                <a href="#" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">
          © 2022{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            CSM Suceava
          </a>
          . All Rights Reserved.
        </span>
        <div className="mr-10 flex space-x-6 sm:justify-center sm:mt-0">
          <a href="#" className="text-gray-500 hover:text-blue-500 ">
            <BsFacebook size={24} />
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-500">
            <BsInstagram size={24} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
