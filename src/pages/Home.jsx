// import React from 'react';
import Sidebar from "../components/SideBar";
import Navbar from "../components/NavBar";
import Carousel from "../components/Carousel";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Skeletoncard from "../components/Skeletoncard";
import Smallcard from "../components/Smallcard";
import { Skeletonsmallcard } from "../components/Skeletonsmallcard";
import "../style/Home.css";
function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [home, sethome] = useState(true);

  useEffect(() => {
    const fetchhome = async () => {
      try {
        const response = await fetch(
          "https://anime-api-chrono.vercel.app/api/"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        sethome(result.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchhome();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  console.log();
  return (
    <div className="flex min-h-screen max-w-100 overflow-hidden bg-[#181B20]">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <div className="bg-black w-full">
        <Carousel />

        <div className="flex overflow-scroll whitespace-nowrap hide-scrollbar">
          {loading
            ? Array.from({ length: 35 }, (_, index) => (
                <a
                  href=""
                  className="text-gray-700 bg-gray-700 m-1 p-3 rounded-md my-2 text-md inline-block animate-pulse"
                  key={index}
                >
                Genre
                </a>
              ))
            : home.genres.map((item, index) => (
                <a
                  href=""
                  className="text-white bg-slate-700 m-1 p-3 rounded-md my-2 text-lg inline-block"
                  key={index}
                >
                  {item}
                </a>
              ))}
        </div>

        <div className="flex flex-col md:flex-row gap-10 py-4">
          <div className="flex-2">
            <p className="text-[#C31C2E] font-bold text-2xl py-2">New Update</p>
            <div className="grid grid-cols-6 gap-x-3 transition-all duration-300 ease-in-out max-[1400px]:grid-cols-4 max-[758px]:grid-cols-3 max-[478px]:grid-cols-2">
              {loading
                ? Array.from({ length: 35 }, (_, index) => (
                    <Skeletoncard key={index} />
                  ))
                : home.latestEpisode
                    .slice(0, 24)
                    .map((anime, index) => (
                      <Card
                        key={index}
                        image={anime.poster}
                        title={anime.title}
                        dub={anime.tvInfo.dub}
                        sub={anime.tvInfo.sub}
                      />
                    ))}
            </div>
          </div>

          <div className="md:w-1/5 lg:w-1/4 xl:w-1/5">
            <p className="text-[#C31C2E] font-bold text-2xl py-2">
              Most Favorite
            </p>
            <div className="flex flex-col gap-2">
              {loading
                ? Array.from({ length: 10 }, (_, index) => (
                    <Skeletonsmallcard key={index} />
                  ))
                : home.mostFavorite
                    .slice(0, 10)
                    .map((tren, index) => (
                      <Smallcard
                        key={index}
                        image={tren.poster}
                        title={tren.title}
                        dub={tren.tvInfo.dub}
                        sub={tren.tvInfo.sub}
                      />
                    ))}
            </div>
            {/* <p className="text-[#C31C2E] font-bold text-4xl py-2 mt-4">
              Genres
            </p>
            <div className="flex flex-wrap mt-1">
            {loading ? Array.from({ length: 12 }, (_, index) => (
              <a href="" className=" bg-gray-500 text-white py-4 px-6 m-1 rounded-sm animate-pulse" key={index}></a>
            )):(
              home.genres.map((gen,index) => (

              <a href="" className=" bg-[#C31C2E] text-white p-1 m-1 rounded-md" key={index}>{gen}</a>
              ))

            ) }
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
