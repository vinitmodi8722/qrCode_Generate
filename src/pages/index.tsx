/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import qrcode from "../../public/qrscanimage.png";
import Image from "next/image";
import HomeHeroSection from "../components/homeHeroSection";

const HomeSection = () => {
  return (
    <>
      <div className="h-[85vh] bg-gradient-to-r from-purple-400 to-green-500 w-full flex justify-center relative">
        <div className="mt-[2%] lg:text-4xl md:text-xl sm:text-xs">
          Generate your own Qr-Code
        </div>
        <div className="absolute size-[450px] mt-[8%] mr-[55%]">
          <Image src={qrcode} alt={"qrcode"} className="animate-pulse" />
        </div>
        <div className="absolute">
          <HomeHeroSection />
        </div>
      </div>
    </>
  );
};

export default HomeSection;
