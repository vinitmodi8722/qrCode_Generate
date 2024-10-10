import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage("Your message has been sent!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="flex flex-col items-center justify-center h-[85vh] bg-gradient-to-b from-blue-100 to-blue-400 p-4">
      <div className="w-[350px] flex flex-col items-center justify-center mt-7">
        <h1 className="text-4xl font-bold text-cyan-900 mb-6">Contact Us</h1>

        {successMessage && (
          <div className="mb-4 text-green-600">{successMessage}</div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-tr from-yellow-200 to-purple-300 p-4 rounded-lg shadow-lg w-full max-w-md mb-5"
        >
          <div className="mb-2">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 p-1 rounded w-full"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="number" className="block text-gray-700 mb-2">
              Phone number
            </label>
            <input
              type="number"
              id="pnumber"
              name="pnumber"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 p-1 rounded w-full"
              required
            />
          </div>

          <div className="mb-2">
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-1 rounded w-full"
              required
            />
          </div>

          <div className="mb-2">
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 p-1 rounded w-full"
              rows={4}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
