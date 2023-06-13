import React, { useState } from "react";

import { ToastContainer ,toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    services: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      // Handle checkbox inputs separately
      const updatedServices = [...formData.services];
      if (checked) {
        updatedServices.push(value);
      } else {
        const index = updatedServices.indexOf(value);
        if (index !== -1) {
          updatedServices.splice(index, 1);
        }
      }

      setFormData((prevState) => ({
        ...prevState,
        services: updatedServices,
      }));
    } else {
      // Handle other input types (text, email, etc.)
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // API call
    // Create a URL-encoded string from the form data

    // Prepare the request payload
    const requestPayload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      description: formData.description,
      services: JSON.stringify(formData.services),
    };

    // Convert the request payload to URL-encoded format
    const urlEncodedData = Object.keys(requestPayload)
      .map(
        (key) =>
          encodeURIComponent(key) +
          "=" +
          encodeURIComponent(requestPayload[key])
      )
      .join("&");

    // Send the form data to the API
    fetch("http://formz.in/api/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: urlEncodedData,
    })
      .then((response) => {
        // Successful hit
        if (response.status === 201) {
          console.log("Form submitted successfully");
          toast.success("Form submitted successfully");
        } else if (response.status === 400) {
          // Unsuccessful hit
          console.log("Error submitting the form");
          toast.error("Error submitting the form");
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        // Handle any network or fetch API errors
      });

    console.log(formData);
  };

  return (
    <div className="bg-slate-800">
      <form
        className="max-w-md mx-auto p-4 contact-form-content"
        onSubmit={handleSubmit}
      >
        <label className="block mb-2">
          <p className="text-gray-300 text-left">Name:</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-2 mt-1"
            required
          />
        </label>

        <label className="block mb-2">
          <p className="text-gray-300 text-left">Email:</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-2 mt-1"
            required
          />
        </label>

        <label className="block mb-2">
          <p className="text-gray-300 text-left">Phone Number:</p>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-2 mt-1"
            required
          />
        </label>

        <label className="block mb-2">
          <p className="text-gray-300 text-left">How Can We Help? (Description):</p>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="block w-full border border-gray-300 rounded p-2 mt-1"
            required
          />
        </label>

        <label className="block mb-2">
          <p className="text-gray-300 text-left">Services:</p>
          <div className="mt-1 text-gray-300 grid grid-cols-2 text-sm sm:text-base">
            <label className="inline-flex items-center mb-2">
              <input
                type="checkbox"
                name="services"
                value="Website Design"
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="ml-2">Website Design</span>
            </label>
            <label className="inline-flex items-center mb-2">
              <input
                type="checkbox"
                name="services"
                value="Content Creation"
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="ml-2">Content Creation</span>
            </label>
            <label className="inline-flex items-center mb-2">
              <input
                type="checkbox"
                name="services"
                value="UX Design"
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="ml-2">UX Design</span>
            </label>
            <label className="inline-flex items-center mb-2">
              <input
                type="checkbox"
                name="services"
                value="Strategy & Consulting"
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="ml-2">Strategy & Consulting</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="services"
                value="User Research"
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="ml-2">User Research</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="services"
                value="Other"
                onChange={handleChange}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <span className="ml-2">Other</span>
            </label>
          </div>
        </label>

        <button
          type="submit"
          className="bg-slate-600 text-white px-24 py-2 rounded hover:bg-slate-700 transition-colors mt-2"
        >
          Send Message
        </button>
      </form>
      <ToastContainer transition={Slide} />
    </div>
  );
};

export default ContactForm;
