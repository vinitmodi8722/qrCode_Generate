import Image from "next/image";
import React from "react";
import vlogo from "../../../public/vlogo.png";

const FooterSection = () => {
  return (
    <>
      <div className="absolute bottom-0 w-full bg-pink-700 text-white h-[8%] flex justify-center items-center">
        <Image src={vlogo} alt="vlogo" className="h-[45px] w-[45px]" />
        <div className="text-yellow-300">- vinit modi...</div>
      </div>
    </>
  );
};

export default FooterSection;
