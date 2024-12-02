// import React from 'react';
import Sidebar from "../components/SideBar";
import Navbar from "../components/NavBar";
// import Carousel from "../components/Carousel";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Skeletoncard from "../components/Skeletoncard";
import Smallcard from "../components/Smallcard";
import { Skeletonsmallcard } from "../components/Skeletonsmallcard";
import "../style/Home.css";
import { useParams, useNavigate } from "react-router-dom";
import Animedetail from "../components/AnimeDetail";
import Footer from "../components/Footer";
function Detail() {
  const { animeId } = useParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await fetch(
          `https://anime-api-chrono.vercel.app/api/info?id=${animeId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setDetail(result.results.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [animeId]);

  const changeDetail = (newDetail) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/detail/${newDetail}`);
    setLoading(true);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // console.log(detail.animeInfo?.tvInfo?.quality);
  return (
    <div
      className="flex justify-center min-h-screen max-w-100 overflow-hidden bg-black"
      style={{ zIndex: "-999" }}
    >
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <div className=" w-full">
        <div
          className="absolute top-0 left-0 w-full h-screen bg-cover bg-no-repeat bg-center m-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${detail.poster})`,
            filter: "blur(10px)",
            zIndex: "-1",
          }}
        ></div>
        {loading ? (
          <div className="flex max-w-screen-2xl mx-auto w-full h-max px-4 relative py-10 pt-20">
            <div className="h-full w-full flex lg:flex-row flex-col items-center lg:items-start gap-x-4 ">
              <div className="relative mb-6 lg:mb-0 overflow-hidden rounded-md before:absolute before:w-full before:bg-gradient-to-t before:from-stone-950 before:to-transparent before:h-32 before:bottom-0 before:left-0 before:z-20 h-80 w-52 lg:min-w-60">
                <div className="w-full h-full flex justify-center items-center">
                  <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              </div>

              <div className="xl:mt-3 w-full">
                <div className="h-10 w-40 bg-gray-200 rounded animate-pulse"></div>
                <div className="rounded-sm my-4 items-center flex gap-px overflow-hidden">
                  <div className="h-6 w-20 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-6 w-20 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-6 w-20 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="flex my-4">
                  <div className="h-10 w-40 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="h-20 w-full bg-gray-200 rounded animate-pulse"></div>
              </div>

              <div className="lg:max-w-96 w-full flex-shrink-0 flex flex-col text-sm p-6 backdrop-blur-md gap-4 justify-center lg:h-max">
                <div className="h-6 w-40 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-6 w-40 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-6 w-40 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-6 w-40 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-6 w-40 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-6 w-40 bg-gray-200 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        ) : (
          <Animedetail
            image={detail.poster}
            title={detail.title}
            overview={detail.animeInfo?.Overview}
            type={detail.animeInfo?.tvInfo?.showType}
            sub={detail.animeInfo?.tvInfo?.sub}
            dub={detail.animeInfo?.tvInfo?.dub}
            duration={detail.animeInfo?.tvInfo?.duration}
            quality={detail.animeInfo?.tvInfo?.quality}
            rating={detail.animeInfo?.tvInfo?.rating}
            japanese={detail.animeInfo?.Japanese}
            aired={detail.animeInfo?.Aired}
            premiered={detail.animeInfo?.Premiered}
            status={detail.animeInfo?.Status}
            genres={detail.animeInfo?.Genres}
            studio={detail.animeInfo?.Studios}
          />
        )}

        <div className="flex flex-col md:flex-row gap-10 py-4 px-10 justify-center">
          <div className="flex-2">
            <p className="text-[#C31C2E] font-bold text-2xl py-2">
              Recommend For You
            </p>
            <div className="grid grid-cols-6 gap-x-3 transition-all duration-300 ease-in-out max-[1400px]:grid-cols-6 max-[758px]:grid-cols-3 max-[478px]:grid-cols-2">
              {loading
                ? Array.from({ length: 35 }, (_, index) => (
                    <Skeletoncard key={index} />
                  ))
                : detail.recommended_data.map((anime, index) => (
                    <Card
                      key={index}
                      image={anime.poster}
                      title={anime.title}
                      dub={anime.tvInfo.dub}
                      sub={anime.tvInfo.sub}
                      link={anime.id}
                      onclick={() => changeDetail(anime.id)}
                    />
                  ))}
            </div>
          </div>

          <div className="md:w-1/5 lg:w-1/4 xl:w-1/5">
            <p className="text-[#C31C2E] font-bold text-2xl py-2">
              Related Anime
            </p>
            <div className="flex flex-col gap-2">
              {loading
                ? Array.from({ length: 10 }, (_, index) => (
                    <Skeletonsmallcard key={index} />
                  ))
                : detail.related_data
                    .slice(0, 8)
                    .map((tren, index) => (
                      <Smallcard
                        key={index}
                        image={tren.poster}
                        title={tren.title}
                        dub={tren.tvInfo.dub}
                        sub={tren.tvInfo.sub}
                        link={tren.id}
                        onclick={() => changeDetail(tren.id)}
                      />
                    ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Detail;
