import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import vlogo from "../../../public/vlogo.png";

const HomeHeroSection = () => {
  const router = useRouter();
  const [isBlasting, setIsBlasting] = useState(false);

  const handleClick = () => {
    setIsBlasting(true);
    setTimeout(() => {
      router.push("/menupage");
    }, 600);
  };

  return (
    <div className="flex justify-center items-center sm:flex-col">
      <div className="box-border rounded-full shadow-2xl bg-gradient-to-r from-green-300 to-purple-400 h-[300px] w-[500px] mt-[200px] ml-[550px] flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
          <div>
            <Image
              src={vlogo}
              alt={"vlogo"}
              className="size-32 absolute -mt-[120px] -ml-[65px]"
            />
          </div>
          <div className="button-click-me mb-4">
            <button
              onClick={handleClick}
              className={`text-white font-bold py-2 px-6 rounded-full bg-blue-500 hover:bg-gradient-to-r from-blue-500 to-green-500 duration-500 ${
                isBlasting ? "animate-blast" : ""
              }`}
            >
              Click Me
            </button>
          </div>
          <div className="text-center mt-16 absolute">
            <h1 className="text-4xl font-bold animate-colorAnimation">
              Unlock New Experiences
            </h1>
            <p className="text-gray-300 mt-2 animate-colorAnimation">
              Scan, Explore, Discover
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
