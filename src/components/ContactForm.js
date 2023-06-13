import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
    services: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
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
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call
    console.log(formData);
  };

  return (
    <form className="max-w-md mx-auto p-4" onSubmit={handleSubmit}>
      <label className="block mb-2">
        <span className="text-gray-700">Name:</span>
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
        <span className="text-gray-700">Email:</span>
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
        <span className="text-gray-700">Phone Number:</span>
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
        <span className="text-gray-700">How Can We Help? (Description):</span>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="block w-full border border-gray-300 rounded p-2 mt-1"
          required
        />
      </label>

      <label className="block mb-2">
        <span className="text-gray-700">Services:</span>
        <div className="mt-1">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="services"
              value="Website Design"
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2">Website Design</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              name="services"
              value="Content Creation"
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2">Content Creation</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="checkbox"
              name="services"
              value="UX Design"
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-blue-500"
            />
            <span className="ml-2">UX Design</span>
          </label>
          <label className="inline-flex items-center">
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
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
