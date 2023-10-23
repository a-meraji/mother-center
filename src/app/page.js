"use client";
import BreafInro from "@/components/breafInro";
import Intro from "@/components/intro";
import Plans from "@/components/planes";
import PunchLine from "@/components/punchLine";
import Suitables from "@/components/suitables";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { AiOutlineGift } from "react-icons/ai";

export default function Home() {
  useEffect(() => {
    Aos.init({
      once: false,
    });
  }, []);

  return (
    <main className="px-24 text-primary">
      <Intro />
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 16 16"
        className="mt-10 hidden h-8 w-8 animate-bounce text-[#636363] lg:block"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
        ></path>
      </svg>
      <BreafInro />
      <Suitables />
      <h6
        data-aos="fade-left"
        data-aos-duration="1000"
        className="text-4xl font-black mt-32  text-secondary flex items-center gap-4"
      >
        <AiOutlineGift className="w-12 h-12" />
        ۱۴ روز مهلت تست رایگان!
      </h6>
      <Plans />
      <PunchLine />
    </main>
  );
}
