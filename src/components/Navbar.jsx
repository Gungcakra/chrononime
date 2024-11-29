/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ toggleSidebar }) => {
  const [bg, setBg] = useState("bg-transparent");
  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
      setBg("bg-[#181B20]");
    } else {
      setBg("bg-transparent");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full transform-transition duration-200 ease-in-out text-white flex items-center justify-between p-5 z-10 ${bg}`}
    >
      <div className="flex  gap-5">
        <button onClick={toggleSidebar} className="text-2xl text-white">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <h1 className="text-3xl font-bold">Chrononime</h1>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 pl-10 pr-4 bg-gray-700 text-white rounded-md focus:outline-none"
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">
          <FontAwesomeIcon icon={faSearch} className="text-white" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
