import React from "react";
import AboutList from "./AboutList";

const AboutMe = () => {
  return (
    <section
      id="about"
      className=" w-full h-full  bg-black text-white py-28 px-4"
    >
      <div className=" max-w-6xl   mx-auto  gap-6 md:gap-16">
        <h1 className=" text-2xl md:text-3xl py-3 tracking-[6px] uppercase font-semibold text-center ">
          Story About Me
        </h1>
        <p className="  text-xl md:text-3xl font-medium md:leading-relaxed text-textColor">
          I' m{" "}
          <span className=" font-bold tracking-wider text-white">
            {" "}
            Mustapaha Tahiru,{" "}
          </span>{" "}
          Mustapah Tahiru is a fast learner and a versatile software developer
          proficient in <span className="text-bold text-white">
            JavaScript
          </span>{" "}
          , <span className="text-bold text-white">Python</span> ,
          <span className="text-bold text-white">PHP</span> ,{" "}
          <span className="text-bold text-white">Flutter</span> ,{" "}
          <span className="text-bold text-white">Kotlin</span> , and{" "}
          <span className="text-bold text-white">TypeScript</span> , among
          others. His expertise extends to various frameworks such as{" "}
          <span className="text-bold text-white">React</span> ,{" "}
          <span className="text-bold text-white">Next.js</span> ,{" "}
          <span className="text-bold text-white">Node.js</span> ,{" "}
          <span className="text-bold text-white">Sanity</span> , and{" "}
          <span className="text-bold text-white">Express.js</span> . With a keen
          ability to grasp new concepts quickly, Mustapah adapts swiftly to
          emerging technologies, allowing him to solve complex problems and
          deliver high-quality solutions tailored to meet the needs of clients
          and users. His agility and willingness to learn position him as a
          valuable asset in the dynamic landscape of software development.
        </p>
        <div className=" py-10 w-[700px] grid grid-cols-1 md:grid-cols-2 gap-8">
          <AboutList title={"Web Design"} />
          <AboutList title={"Mobile Apps "} />
          <AboutList title={"Wep Apps"} />
          <AboutList title={"Ecommerce"} />
          <AboutList title={"Management Systems"} />
          <AboutList title={"User Experience"} />
          <AboutList title={"Graphic Design"} />
          <AboutList title={"WordPress Website"} />
          <AboutList title={"Branding"} />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
