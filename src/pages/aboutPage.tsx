/* eslint-disable react/no-unescaped-entities */
import React from "react";

const AboutPage = () => {
  return (
    <div className="h-[85vh] flex flex-col items-center justify-center   bg-gray-100 p-8">
      <div className="absolute top-[15%]">
        <h1 className="text-4xl flex justify-center font-bold text-cyan-700 mb-6">
          About Our QR Scanner
        </h1>

        <div className="max-w-2xl text-justify text-lg text-gray-700">
          <p className="mb-4">
            Welcome to our QR Scanner website! Our mission is to provide a
            user-friendly and efficient way to make QR codes, and decode them.
            <p className="w-full flex justify-end">~ vinit modi</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
