/* eslint-disable react/prop-types */

import {
  faClosedCaptioning,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Card = ({ image, title, dub, sub, link }) => {
  const truncateTitle = (title) => {
    const maxLength = 18;
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }
    return title;
  };

  
  return (
    <Link
      to={`/anime/${link}`}
      className="md:w-[10rem] h-[17rem] lg:h-[20rem] 2xs:w-[16rem] 2xl:w-[14rem] sm:w-[14rem] xs:w-[8rem] 3xl:w-[14rem] bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 rounded-md"
    >
      {/* Image section */}
      <div className="h-[80%] w-full p-0">
        <a href="#">
          <img
            className="w-full h-full object-cover"
            src={image}
            alt="poster"
          />
        </a>
      </div>
      {/* Text section */}
      <div className="h-[20%] flex items-start justify-start">
        <a href="#">
          <h5 className="mb-2 text-xm font-semibold tracking-tight text-gray-900 dark:text-white">
            {truncateTitle(title)}
          </h5>
          <div className="flex">
            {dub && (
              <h5 className="mb-2 text-md font-semibold tracking-tight px-1 rounded-sm mx-1 bg-[#58A988] text-gray-900 dark:text-gray-900">
                <FontAwesomeIcon icon={faMicrophone} /> {dub}
              </h5>
            )}

            {sub && (
              <h5 className="mb-2 text-md font-semibold tracking-tight px-1 rounded-sm mx-1 bg-[#F0C567] text-gray-900 dark:text-gray-900">
                <FontAwesomeIcon icon={faClosedCaptioning} /> {sub}
              </h5>
            )}
          </div>
        </a>
      </div>
    </Link>
  );
};

export default Card;
