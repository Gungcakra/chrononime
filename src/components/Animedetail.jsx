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
    <div className="flex max-w-screen-2xl mx-auto w-full h-max px-4 relative py-10 pt-20">
    <div className="h-full w-full flex lg:flex-row flex-col items-center lg:items-start gap-x-4 ">
    
      <div className="relative mb-6 lg:mb-0 overflow-hidden rounded-md before:absolute before:w-full before:bg-gradient-to-t before:from-stone-950 before:to-transparent before:h-32 before:bottom-0 before:left-0 before:z-20 h-80 w-52 lg:min-w-60">
        <img
          src={image}
          alt="Anime Poster"
          loading="lazy"
          className="w-full h-full object-contain"
        />
      </div>


      <div className="xl:mt-3 w-full">
        <h1 className="text-3xl font-semibold text-white">{title}</h1>
        <div className="rounded-sm my-4 items-center flex gap-px overflow-hidden">
          {rating && (
            <p className="bg-white text-black py-1 font-semibold px-2 text-sm">
              <FontAwesomeIcon icon={faStar} /> {rating}
            </p>
          )}
          {dub && (
            <p className="bg-primary text-black font-semibold py-1 px-2 text-sm bg-yellow-500">
              <FontAwesomeIcon icon={faClosedCaptioning} /> {dub}
            </p>
          )}
          {sub && (
            <p className="bg-yellow-500 text-black font-semibold py-1 px-2 text-sm">
              <FontAwesomeIcon icon={faMicrophone} /> {sub}
            </p>
          )}
   
         <p className="text-sm text-white">&nbsp;&bull; {type} &nbsp;&bull;&nbsp;{duration}</p>
         
        </div>
        <div className="flex my-4">
          <a
            href="#"
            className="text-white inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground h-10 px-4 py-2 bg-rose-600 rounded-full hover:bg-rose-700"
          >
            <FontAwesomeIcon icon={faPlay} className="mr-2" /> Watch now
          </a>
        </div>
        <p className="dark:text-slate-50 text-sm">
          {truncateDescription(overview)}

        </p>
       
      </div>


      <div className="lg:max-w-96 w-full flex-shrink-0 flex flex-col text-sm p-6 backdrop-blur-md gap-4 justify-center lg:h-max">
        <p className="text-white">
          <span className="font-semibold text-white">Japanese :</span>{" "}
          {japanese}
        </p>
        <p className="text-white">
          <span className="font-semibold text-white">Aired :</span> {aired}
        </p>
        <p className="text-white">
          <span className="font-semibold text-white">Premiered :</span>{" "}
          {premiered}
        </p>
        <p className="text-white">
          <span className="font-semibold text-white">Status :</span> {status}
        </p>
        <p className="text-white flex flex-wrap gap-px">
          <span className="font-semibold text-white">Genres :</span>{" "}
          {genres?.map((genre, index) => (
            <span
              key={index}
              className="bg-secondary-foreground m-[4px] py-1 px-2 rounded-md bg-gray-600 hover:bg-gray-700 duration-200 ease-linear cursor-pointer"
            >
              {genre}
            </span>
          ))}
        </p>
        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 bg-border h-[1px] w-full"
        ></div>
        <div className="flex flex-wrap gap-3">
          <span className="text-sm text-secondary-foreground dark:text-primary-foreground">
            Genre :
          </span>

          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:text-primary font-light">
            {genres}
          </div>
        </div>
        <div
          data-orientation="horizontal"
          role="none"
          className="shrink-0 bg-border h-[1px] w-full"
        ></div>
        <p>
          <span>Studio:</span> {studio}
        </p>
      </div>
    </div>
  </div>
  );
};
export default Animedetail;
