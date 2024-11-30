import {
  faClosedCaptioning,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Smallcard({ image, title, dub, sub, link }) {
  const truncateTitle = (title) => {
    const maxLength = 26;
    if (title.length > maxLength) {
      return title.substring(0, maxLength) + "...";
    }
    return title;
  };
  return (
    <>
      <Link
        to={`/anime/${link}`}
        className="bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 rounded-sm p-2 flex justify-start items-start"
      >
        <img src={image} alt="" className="w-[4rem] h-[6rem] rounded-sm" />
        <div className="col ml-2">
          <p className="text-white text-md font-semibold">
            {truncateTitle(title)}
          </p>
          <div className="flex">
            <p className="text-black text-md bg-[#58A988] px-1 my-1 rounded-sm">
              <FontAwesomeIcon icon={faMicrophone} />
              {dub}
            </p>
          </div>
          <div className="flex">
            <p className="text-black text-md bg-[#F0C567] px-1 my-1 rounded-sm">
              <FontAwesomeIcon icon={faClosedCaptioning} />
              {sub}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
