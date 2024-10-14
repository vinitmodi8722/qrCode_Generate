import React, { useState } from "react";
import QrCodeComponent from "../components/qrCodeGenerate";

const MakeQrSections: React.FC = () => {
  const [inputType, setInputType] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [qrCode, setQrCode] = useState<string | null>(null);
  const [error, setError] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
    validateInput(value); // Validate on input change
  };

  const handleGenerateQr = () => {
    if (!error) {
      setQrCode(text);
      setText(""); // Clear input after generating QR
    }
  };

  const validateInput = (value: string) => {
    if (inputType === "text" && value.trim() === "") {
      setError("Please enter some text.");
    } else if (inputType === "url" && !isValidUrl(value)) {
      setError("Please enter a valid URL.");
    } else if (inputType === "phone" && !isValidPhoneNumber(value)) {
      setError("Please enter a valid phone number.");
    } else {
      setError("");
    }
  };

  const isValidUrl = (url: string) => {
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlPattern.test(url);
  };

  const isValidPhoneNumber = (phone: string) => {
    const phonePattern = /^\+?[1-9]\d{9,10}$/;
    return phonePattern.test(phone);
  };

  const handleInputTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInputType(e.target.value);
    setText("");
    setQrCode(null);
    setError("");
  };

  return (
    <div className="bg-gradient-to-r from-teal-500 via-red-400 to-yellow-500">
      <div className="text-center p-12 h-[85vh]">
        <h1 className="text-3xl mb-4 font-edu-dots">Generate QR Code...</h1>
        <div className="absolute right-[12%] top-[30%]">
          <div className="max-w-md mx-auto p-10 bg-gray-200 border-4 border-purple-400 rounded-lg shadow-xl transform transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-gradient-to-r from-purple-600 to-pink-500">
            <select
              value={inputType}
              onChange={handleInputTypeChange}
              className="p-2 mr-4 text-lg mb-4 border-2 border-purple-400 rounded-md bg-transparent text-green-900 hover:bg-yellow-300 hover:text-emerald-900 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(255,0,0,0.6)] focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="">Select an Option</option>
              <option value="text">Text</option>
              <option value="url">URL</option>
              <option value="phone">Phone Number</option>
            </select>

            {inputType && (
              <input
                type={inputType === "phone" ? "tel" : "text"}
                value={text}
                onChange={handleInputChange}
                placeholder={
                  inputType === "text"
                    ? "Enter text"
                    : inputType === "url"
                    ? "Enter URL"
                    : "Enter phone number"
                }
                className="p-2 text-lg mb-4 border-2 border-purple-300 rounded-full w-full transition-all duration-500 ease-in-out transform hover:bg-yellow-200 hover:border-red-500 hover:text-black focus:bg-teal-200 focus:border-teal-500 focus:text-gray-900 focus:scale-110 hover:scale-105"
              />
            )}

            <button
              onClick={handleGenerateQr}
              className="bg-purple-400 text-white font-bold py-3 px-4 rounded hover:bg-pink-500 hover:scale-105 transition duration-300 ease-in-out transform focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-50 focus:outline-none hover:shadow-lg"
              disabled={!!error || !text}
            >
              Generate QR Code
            </button>
          </div>
        </div>

        <div className="absolute left-[14%] flex flex-col items-center justify-center top-[30%] box-border border-black hover:border-purple-900 border-2 p-[2%] rounded-md">
          {error && (
            <p className="text-red-950 font-protest-strike text-xl font-semibold mt-4 transition duration-300 transform hover:scale-105">
              {error}
            </p>
          )}
          <div className="flex justify-center">
            <div className="box-border border-4 border-gradient-to-r from-orange-400 to-red-500 p-7 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              {qrCode ? (
                <>
                  <div className="mb-4">
                    <QrCodeComponent text={qrCode} />
                  </div>
                </>
              ) : (
                <p className="text-gray-700 font-medium">
                  No QR code generated yet.
                </p>
              )}
            </div>
          </div>
          {qrCode && (
            <div className="flex justify-center mt-4">
              <p className="text-center font-bold text-lg">SCAN ME...!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MakeQrSections;
