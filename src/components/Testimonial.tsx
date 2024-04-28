"use client";
import { useState } from "react";
import Slider from "react-slick";
const Testimonial = () => {
  const [activeDots, setActiveDots] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev: any, next: any) => {
      setActiveDots(next);
    },

    appendDots: (dots:any) => (
      <div
        style={{
          position: "absolute",
          bottom: "-50px",
          left: "50%",
          transform: "translate(-50%,0)",
        }}
      >
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            width: "100%",
            cursor: "pointer",
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={
          i === activeDots
            ? {
                width: "12px",
                height: "12px",
                borderRadius: "50%",

                border: "1px solid #F7D449",
              }
            : {
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                border: "1px solid #aeaeae",
              }
        }
      ></div>
    ),
  };
  return (
    <section
      id="testimonial"
      className=" text-white bg-[#0F1113]  py-20 flex justify-center items-center"
    >
      <div className="max-w-[450px]  h-60 md:w-[620px] md:px-4">
        <div>
          <Slider {...settings}>
            <div>
              <p className=" text-xl text-left px-2 text-textColor md:text-center leading-8">
                <span className="text-white">Benab Company CEO</span> - A
                software solutions and research center that is dedicated to
                developing innovative software solutions, conducting research to
                advance technology, providing training programs, offering
                consulting services, and engaging with the software development
                community.
              </p>
            </div>
            <div>
              <p className=" text-xl text-left px-2 text-textColor md:text-center leading-8">
                <span className="text-white">Google Company CEO</span> - A
                software solutions and research center that is dedicated to
                developing innovative software solutions, conducting research to
                advance technology, providing training programs, offering
                consulting services, and engaging with the software development
                community.
              </p>
            </div>
            <div>
              <p className=" text-xl text-left px-2 text-textColor md:text-center leading-8">
                <span className="text-white">OpenAi CEO</span> - A software
                solutions and research center that is dedicated to developing
                innovative software solutions, conducting research to advance
                technology, providing training programs, offering consulting
                services, and engaging with the software development community.
              </p>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
