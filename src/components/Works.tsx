import React from "react";
import { w1, w2, w3, w4, w5, } from "../../public/assets/index";


import Image from "next/image";
import Link from "next/link";
import { ImGift } from "react-icons/im";
const Works = () => {
  return (
    <section
      id="works"
      className=" w-full h-full px-10 bg-black text-white py-28"
    >
      <h1 className="text-3xl uppercase tracking-[6px] font-semibold text-center">
        Featured Works.
      </h1>
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:gap-0 h-[1000px] mt-16 py-6 md:h-[480px]">
        <div className=" w-full h-full  overflow-y-hidden  group">
          <div className=" border-white  w-full h-full relative   shadow-md rounded-md">
            <img
              src={"/blog1.jpg"}
              alt="works image"
              className=" w-full rounded-md h-full object-cover scale-100 group-hover:scale-75 duration-500"
            />
            <div className=" absolute w-full h-[480px] left-0 top-0">
              <div className=" w-full h-full    bg-black bg-opacity-70 hidden group-hover:inline-block transition-opacity duration-500">
                <Link href={"https://tahiru-blog.vercel.app/"} target="_blank" className=" bg-designColors absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:bottom-52 bottom-80 text-white px-6 py-2 w-60 font-bold text-center text-2xl">
                  Blog WebApp
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-full overflow-y-hidden  group">
          <div className=" border-white  w-full h-full relative   shadow-md rounded-md">
            <img
              src={"blog2.jpg"}
              alt="works image"
              className=" w-full rounded-md h-full   object-cover scale-100 group-hover:scale-75 duration-500"
            />
            <div className=" absolute w-full h-[480px] left-0 top-0">
              <div className=" w-full h-full    bg-black bg-opacity-70 hidden group-hover:inline-block transition-opacity duration-500">
                <Link href={"https://benab-blog.vercel.app/"} target="_blank" className=" bg-designColors absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:bottom-52 bottom-80 text-white px-6 py-2 w-60 font-bold text-center text-2xl">
                  Blog WebApp
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-full overflow-y-hidden  group">
          <div className=" border-white  w-full h-full relative   shadow-md rounded-md">
            <img
              src={"ecom1.jpg"}
              alt="works image"
              className=" w-full  rounded-md h-full  object-cover scale-100 group-hover:scale-75 duration-500"
            />
            <div className=" absolute w-full h-[480px] left-0 top-0">
              <div className=" w-full h-full    bg-black bg-opacity-70 hidden group-hover:inline-block transition-opacity duration-500">
                <Link href={"https://benab.vercel.app/"} target="_blank" className=" bg-designColors absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:bottom-52 bottom-80 text-white px-6 py-2 w-60 font-bold text-center text-2xl">
                  Ecommerce
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-full overflow-y-hidden  group">
          <div className=" border-white  w-full h-full relative   shadow-md rounded-md">
            <img
              src={"ecom2.jpg"}
              alt="works image"
              className=" w-full rounded-md h-fit  object-cover scale-100 group-hover:scale-75 duration-500"
            />
            <div className=" absolute w-full h-[480px] left-0 top-0">
              <div className=" w-full h-full    bg-black bg-opacity-70 hidden group-hover:inline-block transition-opacity duration-500">
                <Link href={'https://s-mart-419e.vercel.app/'} target="_blank" className=" bg-designColors absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:bottom-52 bottom-80 text-white px-6 py-2 w-60 font-bold text-center text-2xl">
                  Ecommerce
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full h-full overflow-y-hidden  group">
          <div className=" border-white bg-gray-900  w-full h-full relative   shadow-md rounded-md">
            <img
              src={"w6.png"}
              alt="works image"
              className=" w-full rounded-md h-full object-contain scale-100 group-hover:scale-75 duration-500"
            />
            <div className=" absolute w-full h-[480px] left-0 top-0">
              <div className=" w-full h-full    bg-black bg-opacity-70 hidden group-hover:inline-block transition-opacity duration-500">
                <Link href={'https://dictionary-application-zeta.vercel.app/'} target="_blank" className=" bg-designColors absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:bottom-52 bottom-80 text-white px-6 py-2 w-60 font-bold text-center text-2xl">
                  Dictionary App
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
