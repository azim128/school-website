"use client";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const schema = Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    });

    schema
      .validate({ name, email, subject, message }, { abortEarly: false })
      .then(() => {
        setEmail("");
        setMessage("");
        setName("");
        setSubject("");
        toast.success("🦄 Successfully sent your massage!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        // Display validation errors using toast
        error.inner.forEach((err) => {
          toast.error(err.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 5000,
          });
        });
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen dark:bg-black">
      <div className="text-center">
        <h1 className="text-4xl  lg:text-5xl font-medium mb-4 leading-tight dark:text-white">
          Contact Us
        </h1>
      </div>
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 md:w-[75%] w-[95%]">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 font-medium">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 hover:bg-green-50 dark:bg-gray-200 active:bg-green-100 focus:bg-green-200 rounded py-2 px-3 focus:outline-none focus:border-green-500 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 hover:bg-green-50 dark:bg-gray-200 active:bg-green-100 focus:bg-green-200 rounded py-2 px-3 focus:outline-none focus:border-green-500 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block mb-1 font-medium">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full border border-gray-300 hover:bg-green-50 dark:bg-gray-200 active:bg-green-100 focus:bg-green-200 rounded py-2 px-3 focus:outline-none focus:border-green-500 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-1 font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 hover:bg-green-50 dark:bg-gray-200 active:bg-green-100 focus:bg-green-200 rounded py-2 px-3 focus:outline-none focus:border-green-500 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white rounded py-2 px-4 mb-4"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
