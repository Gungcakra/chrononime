import {
  faClock,
  faClosedCaptioning,
  faMicrophone,
  faPlay,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Animedetail = ({
  image,
  title,
  overview,
  type,
  sub,
  dub,
  duration,
  quality,
  rating,
  japanese,
  aired,
  premiered,
  status,
  genres,
  studio,
}) => {

const truncateDescription = (overview) => {
  if (!overview) return "";
  const maxLength = 350;
  if (overview.length > maxLength) {
    return overview.substring(0, maxLength) + "...";
  }
  return overview;
};

  return (
    <div className="w-full lg:h-[35rem] flex justify-center items-center pt-10">
      <div className="grid md:grid-cols-6 md:grid-rows-5 grid-cols-1 grid-rows-6 gap-4 p-5">
        <div className="md:row-span-5 row-span-1">
          <img src={image} alt="AnimeImage" className="rounded-md min-w-[18rem] min-h-[24rem] max-w-[18rem] max-h-[24rem]" />
        </div>
        <div className="md:col-span-3 md:row-span-5 row-span-1">
          <p className="text-2xl font-semibold text-white">{title}</p>
          <div className="flex gap-1 py-4">
            {rating && (
              <p className="text-black p-1 rounded-sm bg-[#F0C567]">
                <FontAwesomeIcon icon={faStar} /> {rating}
              </p>
            )}
            {dub && (
              <p className="text-black p-1 rounded-sm bg-[#F0C567]">
                <FontAwesomeIcon icon={faMicrophone} /> {dub}
              </p>
            )}
            {sub && (
              <p className="text-black p-1 rounded-sm bg-[#58A988]">
                <FontAwesomeIcon icon={faClosedCaptioning} /> {sub}
              </p>
            )}
            {duration && (
              <p className="text-black p-1 rounded-sm bg-[#B9E7FF]">
                <FontAwesomeIcon icon={faClock} /> {duration}
              </p>
            )}
          </div>
          <div className="my-5">
            <a
              href=""
              className="text-white text-xl bg-[#C31C2E] p-2 rounded-full text-center px-3 font-semibold"
            >
              <FontAwesomeIcon icon={faPlay} /> Watch Now
            </a>
          </div>
          <p className="text-xd text-white">{truncateDescription(overview)}</p>
        </div>
        <div className="md:col-span-2 md:row-span-5 row-span-1 md:col-start-5 ml-10">
          <p className="text-white text-sm mb-1">
            <span className="font-semibold">Japanese</span> : {japanese}
          </p>
          <p className="text-white text-sm mb-1">
            <span className="font-semibold">Aired</span> : {aired}
          </p>
          <p className="text-white text-sm mb-1">
            <span className="font-semibold">Premiered</span> : {premiered}
          </p>
          <p className="text-white text-sm mb-1">
            <span className="font-semibold">Status</span> : {status}
          </p>
          <p className="text-white text-sm mb-1">
            <span className="font-semibold">Genres</span> : {genres}
          </p>
          <p className="text-white text-sm mb-1">
            <span className="font-semibold">Studio</span> : {studio}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Animedetail;
