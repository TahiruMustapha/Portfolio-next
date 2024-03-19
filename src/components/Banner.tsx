"use client";
import React, { useEffect, useRef, useState } from "react";
import Design from "@/components/Design";
import { HiMinus } from "react-icons/hi";
import { Link } from "react-scroll";

const Banner = () => {
  const ref = useRef<string | any>("");
  const [menu, setMenu] = useState(false);

  function handleClick(e: any) {
    if (e.target.contains(ref.current)) {
      setMenu(false);
    }
  }
  const [navSize, setNavSize] = useState("90px");
  const [navColor, setNavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setNavColor("#000000") : setNavColor("transparent");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <section id="home" className=" w-full relative text-white">
      <Design />
      <div className=" absolute left-0 top-0 w-full h-[700px] bg-black bg-opacity-10 ">
        <nav
          style={{
            backgroundColor: navColor,
            transition: "all 1s",
          }}
          className=" px-10 w-full  md:px-16 py-6 flex items-center justify-between bg-black md:fixed top-0 z-40 bg-opacity-25"
        >
          <h1 className=" cursor-pointer text-2xl md:text-4xl text-white font-extrabold border-2 w-12 text-center">
            T
          </h1>
          <div
            onClick={() => setMenu(true)}
            className=" w-8 h-6 group flex flex-col  cursor-pointer  items-center justify-between"
          >
            <span className=" w-full h-[3px] bg-designColors inline-flex group-hover:w-4 duration-300"></span>
            <span className="w-full h-[3px] bg-designColors inline-flex"></span>
            <span className=" w-full h-[3px] bg-designColors inline-flex group-hover:w-4 duration-300"></span>
          </div>
        </nav>
        <div className=" w-full h-full flex flex-col items-center justify-center px-4">
          <h1 className="text-[50px] md:text-[80px] lg:text-[100px] font-black">
            I'm Mustapha Tahiru
          </h1>
          <div className=" w-full md:w-fit flex items-center uppercase gap-2 md:gap-6 text-base md:text-lg font-bold bg-designColors px-6 py-3">
            <h1 className="tracking-[2px] md:tracking-[4px] ">Leader</h1>
            <HiMinus className=" text-2xl rotate-90" />
            <h1 className="tracking-[2px] md:tracking-[4px]  ">Designer</h1>
            <HiMinus className=" text-2xl rotate-90" />
            <h1 className="tracking-[2px] md:tracking-[4px]  ">Developer</h1>
            <HiMinus className=" text-2xl rotate-90" />
          </div>
        </div>
      </div>
      {menu && (
        <div
          ref={(node) => (ref.current = node)}
          onClick={handleClick}
          className=" w-full h-screen bg-black bg-opacity-40 fixed top-0 right-0 flex justify-end z-50"
        >
          <div className=" w-full md:w-[60%] lg:w-[40%] h-full bg-[#0F1113] text-white flex items-center justify-center">
            <div className=" px-12 w-4/5">
              <div>
                <ul className=" flex flex-col gap-2 ">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMenu(false)}
                  >
                    <li className=" text-xl font-semibold hover:text-white duration-300 cursor-pointer text-gray-300">
                      Home
                    </li>
                  </Link>

                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMenu(false)}
                  >
                    <li className=" text-xl font-semibold hover:text-white duration-300 cursor-pointer text-gray-300">
                      About
                    </li>
                  </Link>
                  <Link
                    to="works"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMenu(false)}
                  >
                    <li className=" text-xl font-semibold hover:text-white duration-300 cursor-pointer text-gray-300">
                      Works
                    </li>
                  </Link>
                  <Link
                    to="testimonial"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMenu(false)}
                  >
                    <li className=" text-xl font-semibold hover:text-white duration-300 cursor-pointer text-gray-300">
                      Testimonial
                    </li>
                  </Link>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={() => setMenu(false)}
                  >
                    <li className=" text-xl font-semibold hover:text-white duration-300 cursor-pointer text-gray-300">
                      Contact
                    </li>
                  </Link>
                </ul>
              </div>
              <div className=" text-lg font-thin mt-28">
                <p>Project enquiries</p>
                <p>
                  or say 'Hello' -{" "}
                  <span className=" font-bold text-designColors">
                    tahirumustapha13@gmail.com
                  </span>
                </p>
              </div>
            </div>

            <div className=" w-1/5 h-full border-[1px] text-center flex items-center justify-center">
              <button
                onClick={() => setMenu(false)}
                className="text-3xl text-designColors font-black"
              >
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Banner;
