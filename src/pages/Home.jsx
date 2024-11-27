// import React from 'react';
import Sidebar from "../components/SideBar";
import Navbar from "../components/NavBar";
import Carousel from "../components/Carousel";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Skeletoncard from "../components/Skeletoncard";
import Smallcard from "../components/Smallcard";
import { Skeletonsmallcard } from "../components/Skeletonsmallcard";
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
  return (
    <div className="flex min-h-screen pt-2 max-w-100 overflow-hidden bg-[#181B20]">
      {/* <Sidebar /> */}
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <div className="bg-black w-full">
        <Carousel />

        <p className="text-[#C31C2E] font-bold text-4xl py-2">New Update</p>
        <div className="grid grid-cols-5 grid-rows-5">
          <div className="flex flex-wrap col-span-4 row-span-5 gap-2">
            {loading
              ? Array.from({ length: 35 }, (_, index) => (
                  <Skeletoncard key={index} />
                ))
              : home.latestEpisode
                  .slice(0, 35)
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
          <div className="row-span-5 col-start-5 flex flex-col gap-2">
            <p className="text-[#C31C2E] font-bold text-4xl py-2">
              Most Favorite
            </p>
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
        </div>
      </div>
    </div>
  );
}

export default Home;
