import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faInfoCircle,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const Carousel = () => {
  const [spotLight, setSpotLight] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 10;

  useEffect(() => {
    const fetchSpotLight = async () => {
      try {
        const response = await fetch(
          "https://anime-api-chrono.vercel.app/api/"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setSpotLight(result.results.spotlights);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpotLight();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, [totalSlides]);

  const truncateDescription = (description) => {
    const maxLength = 300;
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + "...";
    }
    return description;
  };

  return (
    <div className="relative overflow-hidden w-full">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {loading
          ? Array(3)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 w-full sm:h-[20rem] md:h-[40rem] flex items-center justify-center animate-pulse"
                >
                  <div className="relative w-full h-full bg-gray-800 animate-fade-in duration-1000">
                    <div className="absolute inset-0 bg-gray-700 animate-scale-up duration-1500"></div>
                    <div className="relative z-10 text-white px-6 py-12 sm:px-8 sm:py-16 md:px-12 md:py-24 animate-slide-up duration-2000">
                      <div className="md:flex items-center justify-between animate-fade-in-up duration-2500">
                        <div className="max-w-[35%] p-5 animate-pulse duration-3000">
                          <div className="h-8 sm:h-12 bg-gray-600 rounded w-3/4 mb-4 animate-pulse-fast duration-1000"></div>
                          <div className="h-4 bg-gray-500 rounded w-1/2 mb-4 animate-pulse duration-2000"></div>
                          <div className="h-16 bg-gray-600 rounded w-full mb-4 animate-fade-in-left duration-2500"></div>
                          <div className="mt-6 flex gap-4 flex-wrap animate-fade-in-right duration-3000">
                            <div className="h-10 bg-gray-500 rounded w-32 animate-pulse duration-3500"></div>
                            <div className="h-10 bg-gray-500 rounded w-32 animate-pulse duration-4000"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
          : spotLight.map((sp, index) => (
              <div
                className="relative flex-shrink-0 w-full lg:h-[35rem] h-[20rem] sm:h-[20rem] md:h-[20rem] flex items-center justify-center"
                key={index}
              >
                <div className="relative w-full h-full bg-black">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${sp.poster})`,
                      backgroundPosition: "center center",
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div className="relative z-10 text-white px-6 py-12 sm:px-8 sm:py-16 md:px-12 md:py-24">
                    <div className="md:flex items-center justify-between">
                      <div className="max-w-[60%] p-5">
                        <p className="lg:text-lg md:text-md sm:text-sm text-[#C31C2E] mt-2 font-bold">
                          #{index + 1} Spotlight
                        </p>
                        <h3 className="lg:text-3xl md:text-xl sm:text-lg font-bold">
                          {sp.title}
                        </h3>
                        <p className="text-md mt-4 leading-relaxed text-white min-[768px]:hidden max-w-sm hidden md:block lg:block xl:block min-[1024px]:block ">
                          {truncateDescription(sp.description)}
                        </p>

                        <div className="mt-6 flex">
                          <a className="bg-[#C31C2E] font-semibold border-transparent border-2 text-white py-2 px-6 rounded-full flex items-center min-w-fit hover:border-[#C31C2E] hover:text-[#C31C2E] hover:bg-transparent hover:cursor-pointer ease-in-out duration-200 text-sm sm:text-md md:text-lg">
                            <FontAwesomeIcon icon={faPlay} className="mr-2" />
                            Watch Now
                          </a>
                          <a
                            href=""
                            className="ml-2 border-2 font-semibold border-white text-white py-2 px-6 rounded-full flex items-center text-sm sm:text-md md:text-lg"
                          >
                            <FontAwesomeIcon
                              icon={faInfoCircle}
                              className="mr-2"
                            />
                            Detail
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>

      {/* Carousel Controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 hover:text-black hover:bg-[#C31C2E] ease-in-out duration-200 left-4 transform-translate-y-1/2 text-white bg-black bg-opacity-50 p-4 rounded-md"
      >
        <span className="text-xl">
          <FontAwesomeIcon icon={faArrowLeft} />
        </span>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 hover:text-black hover:bg-[#C31C2E] ease-in-out duration-200 right-4 transform-translate-y-1/2 text-white bg-black bg-opacity-50 p-4 rounded-md"
      >
        <span className="text-xl">
          <FontAwesomeIcon icon={faArrowRight} />
        </span>
      </button>
    </div>
  );
};

export default Carousel;
