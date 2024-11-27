/* eslint-disable react/prop-types */
// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFilm,
  faTv,
  faFire,
  faGlasses,
  faStar,
  faPodcast,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ isOpen, closeSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-64 bg-[#181B20] text-white min-h-full z-10 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="px-5 pt-5 flex justify-between items-center">
        {/* Close button */}
        <button onClick={closeSidebar} className="text-2xl text-white bg-black px-2 rounded">
          <FontAwesomeIcon icon={faTimes} /> Close
        </button>
      </div>
      <nav className="mt-5">
        <ul>
          <li className="px-5 py-2 hover:bg-gray-700 flex items-center">
            <FontAwesomeIcon icon={faHome} className="mr-3" />
            <a href="/">Home</a>
          </li>
          <li className="px-5 py-2 hover:bg-gray-700 flex items-center">
            <FontAwesomeIcon icon={faTv} className="mr-3" />
            <a href="/subbed">Subbed Anime</a>
          </li>
          <li className="px-5 py-2 hover:bg-gray-700 flex items-center">
            <FontAwesomeIcon icon={faGlasses} className="mr-3" />
            <a href="/dubbed">Dubbed Anime</a>
          </li>
          <li className="px-5 py-2 hover:bg-gray-700 flex items-center">
            <FontAwesomeIcon icon={faFire} className="mr-3" />
            <a href="/most-popular">Most Popular</a>
          </li>
          <li className="px-5 py-2 hover:bg-gray-700 flex items-center">
            <FontAwesomeIcon icon={faFilm} className="mr-3" />
            <a href="/movies">Movies</a>
          </li>
          <li className="px-5 py-2 hover:bg-gray-700 flex items-center">
            <FontAwesomeIcon icon={faTv} className="mr-3" />
            <a href="/tv-series">TV Series</a>
          </li>
          <li className="px-5 py-2 hover:bg-gray-700 flex items-center">
            <FontAwesomeIcon icon={faPodcast} className="mr-3" />
            <a href="/ovas">OVAs</a>
          </li>
          <li className="px-5 py-2 hover:bg-gray-700 flex items-center">
            <FontAwesomeIcon icon={faPodcast} className="mr-3" />
            <a href="/onas">ONAs</a>
          </li>
          <li className="px-5 py-2 hover:bg-gray-700 flex items-center">
            <FontAwesomeIcon icon={faStar} className="mr-3" />
            <a href="/specials">Specials</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
