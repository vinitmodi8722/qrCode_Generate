import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const Menupage = () => {
  const router = useRouter();
  const handleClick = () => {
    setTimeout(() => {
      router.push("/makeQrSection");
    }, 600);
  };
  const ScanQr = () => {
    setTimeout(() => {
      router.push("/scanQr");
    }, 600);
  };

  return (
    <div className="h-[85vh] flex flex-col items-center justify-center bg-cyan-700 relative">
      <div className="absolute top-10 text-white font-bold text-2xl flex font-edu-dots">
        <div>
          <Image
            src="/arrow.png"
            alt="logo"
            height={60}
            width={50}
            className="mr-4 rotate-[8deg] mt-3"
          />
        </div>
        Choose Action for Qr-code...✨
        <div>
          <Image
            src="/arrow.png"
            alt="logo"
            height={50}
            width={50}
            className="ml-3 mt-3"
            style={{ transform: "rotate3d(36, 645, 0, 180deg)" }}
          />
        </div>
      </div>
      <div className="flex items-center mt-10">
        <div className="relative group w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-green-500 hover:to-blue-500 transition duration-500 ease-in-out shadow-lg hover:shadow-2xl transform hover:scale-110">
          <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-blue-500 transition duration-500 ease-in-out animate-pulse"></div>
          <button
            onClick={handleClick}
            className="relative text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 hover:text-white transition duration-300 ease-in-out z-10"
          >
            <span className="absolute inset-0 animate-gradient-x bg-gradient-to-r from-blue-500 via-green-400 to-blue-500 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out rounded-md"></span>
            <span className="relative z-10 px-4 py-2">Make QR</span>
          </button>
        </div>
        <div className="h-[2px] w-[60vh] rotate-90 mx-10 bg-yellow-300"></div>

        <div className="relative group w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition duration-500 ease-in-out shadow-lg hover:shadow-2xl transform hover:scale-110">
          <div className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-purple-500 transition duration-500 ease-in-out animate-pulse"></div>
          <button
            onClick={ScanQr}
            className="relative text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 hover:text-white transition duration-300 ease-in-out z-10"
          >
            <span className="absolute inset-0 animate-gradient-x bg-gradient-to-r from-purple-500 via-pink-400 to-purple-500 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out rounded-md"></span>
            <span className="relative z-10 px-4 py-2">Scan QR</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menupage;
