import React from "react";
import Navbar from "../components/MainComponents/Navbar";
import Footer from "../components/MainComponents/Footer";
function layoutMain({children}) {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className="flex justify-center items-center">
        <div className="px-6 sm:px-14">
          <Navbar />
        </div>
      </div>
      {children}
      <footer className="">
        <Footer />
      </footer>
    </div>
  );
}

export default layoutMain;
