"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const [error, setError] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.service || !formData.budget || !formData.message) {
      setError("Please select a service, a budget, and write a message.");
      return;
    }

    setError("");
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex justify-center mt-10 px-4">
      {/* responsive width */}
      <div className="border border-gray-500 w-full md:w-[50vw] p-6">
        {/* responsive grid */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="flex flex-col gap-1">
            <label>Full Name</label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="h-8 border bg-gray-50 pl-3 border-gray-300 rounded-sm"
              type="text"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="h-8 border bg-gray-50 pl-3 border-gray-300 rounded-sm"
              type="email"
              placeholder="john@email.com"
              required
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Service</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="h-8 border bg-gray-50 pl-2 border-gray-300 rounded-sm"
            >
              <option value="">Choose a service</option>
              <option value="uiux">UI/UX Design</option>
              <option value="web">Web Development</option>
              <option value="seo">SEO</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label>Budget</label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="h-8 border bg-gray-50 pl-2 border-gray-300 rounded-sm"
            >
              <option value="">Select your budget</option>
              <option value="100-300">$100 – $300</option>
              <option value="300-600">$300 – $600</option>
              <option value="600-1000">$600 – $1,000</option>
              <option value="1000+">$1,000+</option>
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1 md:col-span-2">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border bg-gray-50 p-3 border-gray-300 rounded-sm h-32 resize-none"
              placeholder="Tell us about your project..."
              required
            />
          </div>

          {error && (
            <p className="md:col-span-2 text-red-500 text-sm">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="md:col-span-2 bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
}
