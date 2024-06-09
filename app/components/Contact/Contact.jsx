"use client";
import emailjs from '@emailjs/browser';
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Define refs
  const formRef = useRef(null);
  const ref = useRef(null);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (validateForm()) {
      try {
        const serviceID = process.env.NEXT_PUBLIC_Service_ID;
        const templateID = process.env.NEXT_PUBLIC_Template_ID;
        const publicKey = process.env.NEXT_PUBLIC_Public_Key;
        console.log(serviceID);
        console.log(templateID);
        console.log(publicKey);
        const response = await emailjs.sendForm(
          serviceID,
          templateID,
          formRef.current,
          publicKey
        );
        console.log("Email sent successfully!", response);
        // Reset form fields
        formRef.current.reset();
        // Set state to indicate email sent successfully
        setIsEmailSent(true);
        // Reset error state
        setIsError(false);
      } catch (error) {
        console.error("Error sending email:", error);
        // Set state to indicate error sending email
        setIsError(true);
      } finally {
        // Set loading state to false
        setIsLoading(false);
      }
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  // Validate form fields
  const validateForm = () => {
    let valid = true;
    const errors = {
      name: "",
      email: "",
      message: "",
    };

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      valid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setFormErrors({
      ...formErrors,
      [e.target.name]: "", // Clear the error message when the field value changes
    });
  };

  // UseInView hook
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200"
      id="contact"
    >
      <div className="grid max-w-6xl grid-cols-1 gap-8 p-12 mt-5 bg-white rounded-md shadow-lg md:grid-cols-2">
        <div className="text-center md:text-left">
          <h1 className="mt-4 text-2xl font-bold text-blue-500">Contact Us</h1>
          <p className="mb-4 text-lg text-gray-700">
            Have questions or need assistance? Feel free to reach out to us
            using the contact form or the information below:
          </p>
          <p className="text-lg text-gray-700">
            <strong>Email:</strong> info@farseit.com
          </p>
          <p className="text-lg text-gray-700">
            <strong>Phone:</strong> 01761402081
          </p>
          
          <div className="mt-4">
            <p className="mb-2 text-lg text-gray-700">
              Connect with us on social media:
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/farseitsolution?mibextid=LQQJ4d"
                className="text-blue-500 hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com/FarseIT"
                className="text-blue-500 hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="relative flex-1">
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="p-4 bg-slate-100"
          >
            <input
              type="text"
              required
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full px-4 py-2 mb-2 border-gray-300 rounded-md focus:border-green-500 focus:ring-green-500 focus:outline-none"
            />
            {formErrors.name && (
              <p className="mb-2 text-sm text-red-500">{formErrors.name}</p>
            )}
            <input
              type="email"
              required
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full px-4 py-2 mb-2 border-gray-300 rounded-md focus:border-green-500 focus:ring-green-500 focus:outline-none"
            />
            {formErrors.email && (
              <p className="mb-2 text-sm text-red-500">{formErrors.email}</p>
            )}
            <textarea
              rows={8}
              required
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="block w-full px-4 py-2 mb-2 border-gray-300 rounded-md focus:border-green-500 focus:ring-green-500 focus:outline-none"
            />
            {formErrors.message && (
              <p className="mb-2 text-sm text-red-500">{formErrors.message}</p>
            )}
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-green-600"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
            {isError && (
              <p className="mt-2 text-sm text-red-500">
                Failed to submit the form. Please try again later.
              </p>
            )}
            {isEmailSent && (
              <p className="mt-2 text-sm text-green-500">
                Your message has been sent successfully!
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
