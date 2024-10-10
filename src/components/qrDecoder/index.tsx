import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const QRDecoder = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const startCamera = () => {
    setIsCameraOpen(true);
  };

  const closeCamera = () => {
    setIsCameraOpen(false);
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center h-[85vh] bg-gradient-to-b from-blue-100 to-blue-400 p-4">
      <h1 className="text-4xl font-bold text-cyan-900 mb-6">QR Code Decoder</h1>

      <button
        onClick={startCamera}
        className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-blue-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 mb-6"
        disabled={isCameraOpen}
      >
        Start Camera
      </button>

      <button
        onClick={closeCamera}
        className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-orange-500 hover:to-red-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 mb-6"
        disabled={!isCameraOpen}
      >
        Close Camera
      </button>

      {isCameraOpen && (
        <div className="bg-white p-2 rounded-lg shadow-lg w-[300px] h-[300px] mt-4 relative">
          <QrReader constraints={{ facingMode: "environment" }} />
        </div>
      )}
    </div>
  );
};

export default QRDecoder;
