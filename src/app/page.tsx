import Image from "next/image";
import Banner from "@/components/Banner";
import AboutMe from "@/components/AboutMe";
import Offers from "@/components/Offers";
import Works from "@/components/Works";
import Testimonial from "@/components/Testimonial";
import "slick-carousel/slick/slick.css";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";
export default function Home() {
  return (
    <main>
      <Banner />
      <AboutMe />
      <Offers />
      <Works />
      <Testimonial />
      <Contact />
      <ScrollToTop/>
    </main>
  );
}
