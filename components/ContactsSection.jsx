"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const InputField = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
}) => (
  <div className="mb-4">
    <label
      htmlFor={name}
      className="block text-lg font-semibold mb-2"
    >
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-2 border ${
        error
          ? "border-red-500"
          : "border-gray-300"
      } rounded-md focus:outline-none focus:border-blue-500 transition duration-300`}
    />
    {error && (
      <p className="text-red-500 text-sm mt-1">
        {error}
      </p>
    )}
  </div>
);

const ContactsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] =
    useState(false);
  const [submitSuccess, setSubmitSuccess] =
    useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim())
      newErrors.name = "Name is required";
    if (!formData.email.trim())
      newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.message.trim())
      newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      // Simulating API call
      await new Promise((resolve) =>
        setTimeout(resolve, 2000)
      );
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-semibold text-center mb-8"
        >
          Let's Connect
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
          >
            <h3 className="text-xl font-semibold mb-4">
              Contact Information
            </h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <FaEnvelope className="mr-2 text-blue-500" />
                aliabdo12121@outlook.sa
              </p>
              <p className="flex items-center">
                <FaPhone className="mr-2 text-blue-500" />
                +201090561644
              </p>
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-blue-500" />
                Egypt
              </p>
            </div>
            <div className="mt-6 space-x-4">
              <a
                href="https://www.linkedin.com/in/aliabdo6/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-500 hover:text-blue-600 transition duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/Aliabdo6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-gray-700 hover:text-gray-800 transition duration-300"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.4,
            }}
          >
            <form onSubmit={handleSubmit}>
              <InputField
                label="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />
              <InputField
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-lg font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-300"
                  } rounded-md resize-none focus:outline-none focus:border-blue-500 transition duration-300`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message}
                  </p>
                )}
              </div>
              <div className="text-center">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-blue-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-600 transition duration-300 ${
                    isSubmitting
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                >
                  {isSubmitting
                    ? "Submitting..."
                    : "Submit"}
                </motion.button>
              </div>
            </form>
            {submitSuccess && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-green-500 text-center mt-4"
              >
                Thank you for your message! I'll
                get back to you soon.
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
