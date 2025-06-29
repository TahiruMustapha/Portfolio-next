"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope, FaMap } from "react-icons/fa6";
import { easeIn, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form: any = useRef();
  const [user_name, setUsername] = useState("");
  const [user_email, setEmail] = useState("");
  const [user_message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (user_name === "") {
      setErrorMsg("Enter Name");
    } else if (user_email === "") {
      setErrorMsg("Enter Email");
    } else if (user_message === "") {
      setErrorMsg("Enter Enter Message");
    } else {
      setSuccessMsg(
        `Hi ${user_name}, Thank you for your messages. Additional information will be sent to you shortly via your email at ${user_email}.`
      );
    }
    const templateParams = {
       user_name,
       user_email,
      user_message,
    };
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,

        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section
      id="contact"
      className=" w-full h-fit   relative  bg-fixed text-white bg-contact-image bg-cover bg-center"
    >
      <div className=" w-full  h-full bg-black bg-opacity-90 py-20">
        <div className=" max-w-6xl h-full mx-auto flex flex-col gap-6 md:gap-12">
          <h1 className=" text-center uppercase tracking-widest text-3xl font-thin ">
            Say Hello!
          </h1>
          <div className=" flex flex-col gap-4 md:flex-row items-center justify-between">
            <div className=" flex flex-col items-center gap-3">
              <FaMap className=" text-4xl text-designColors" />
              <p className=" text-sm tracking-wide">Kumasi,Ghana</p>
            </div>
            <div className=" flex flex-col items-center gap-3">
              <FaPhoneAlt className=" text-4xl text-designColors" />
              <p className=" text-sm tracking-wide">+233556230613</p>
            </div>
            <div className=" flex flex-col items-center gap-3">
              <FaEnvelope className=" text-4xl text-designColors" />
              <p className=" text-sm tracking-wide">
                tahirumustapha13@gmail.com
              </p>
            </div>
          </div>
          {successMsg ? (
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: easeIn }}
              className=" max-w-[600px] h-full flex justify-center items-center mx-auto text-lg font-semibold px-4"
            >
              {successMsg}
            </motion.p>
          ) : (
            <form
              ref={form}
              className=" flex flex-col w-full px-2 items-center gap-4 md:gap-10"
            >
              <div className=" flex flex-col w-full md:flex-row items-center gap-4 md:gap-10">
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  className="w-full md:w-1/2 py-2 px-4  text-black placeholder:text-gray-600 font-bold placeholder:font-normal outline-none border-transparent border-2 focus-within:border-designColors duration-200 text-lg"
                  placeholder="Name"
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="w-full md:w-1/2 py-2 px-4  text-black placeholder:text-gray-600 font-bold placeholder:font-normal outline-none border-transparent border-2 focus-within:border-designColors duration-200 text-lg"
                  placeholder="email"
                />
              </div>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                className="w-full h-36  resize-none  p-4  text-black placeholder:text-gray-600 font-bold placeholder:font-normal outline-none border-transparent border-2 focus-within:border-designColors duration-200 text-lg"
              ></textarea>
              {errorMsg && (
                <p className="w-full bg-red-500 py-1 text-center font-semibold tracking-wider text-white">
                  {errorMsg}
                </p>
              )}
              <button
                onClick={handleSubmit}
                className=" uppercase text-lg w-44 h-12 bg-designColors text-white font-bold tracking-wide border-2 border-transparent hover:bg-black hover:border-designColors duration-300"
              >
                Send
              </button>
            </form>
          )}
          <div className=" w-full py-10 bg-black px-4 flex flex-col md:flex-row md:items-center justify-between">
            <div className=" text-lg font-thin">
              <p>Project enquiries</p>
              <p>
                or say 'Hello' -{" "}
                <span className=" font-bold text-designColors">
                  tahirumustapha13@gmail.com
                </span>
              </p>
            </div>
            <p>@ 2025 Benab All rights reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
