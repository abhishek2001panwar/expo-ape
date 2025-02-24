import gsap, { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React, { useEffect } from "react";
import { Power4 } from "gsap";

import { motion } from "framer-motion";

export default function Spred() {
  const parent = React.useRef(null);
  const childImage = React.useRef(null);
  const secondChild = React.useRef(null);
  const thirdChild = React.useRef(null);
  const fourthChild = React.useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "0 20%",
        scrub: 1,
      },
    });

    tl.to(
      childImage.current,
      {
        x: "100%",
      },
      "a"
    );
    tl.to(
      secondChild.current,
      {
        x: "-100%",
      },
      "a"
    );
    tl.to(
      thirdChild.current,
      {
        x: "100%",
      },
      "a"
    );
    tl.to(
      fourthChild.current,
      {
        x: "100%",
      },
      "a"
    );
  });
  return (
    <>
      <div
        ref={parent}
        className="w-full   bg-white text-black flex flex-col overflow-hidden "
      >
        <div className="text-black flex items-center justify-center mt-32">
          <div className="  h-52 w-32 md:w-[40vh]  md:h-[80vh] relative md:mt-32 ">
            <motion.img
              src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
              alt=""
              className=" w-32 h-52 md:h-[70vh] md:w-full"
            />
            <motion.img
              ref={childImage}
              width={150}
              height={100}
              className="absolute h-32 w-20 md:h-60 md:w-52 object-cover top-10 left-[100%]  md:top-32 md:left-[100%]"
              src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
              alt=""
            />
            <motion.video
              ref={thirdChild}
              autoPlay
              muted
              loop
              className="aspect-video w-[80vh] absolute top-[50%] md:top-96 -left-[130%]"
              src=" https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
            ></motion.video>
            <motion.video
              ref={fourthChild}
              autoPlay
              muted
              loop
              className="absolute left-[100%]   "
              src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
            ></motion.video>
            <motion.img
              ref={secondChild}
              width={500}
              height={200}
              src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
              alt=""
              className="absolute h-32 w-32 md:h-[35vh] md:w-full object-cover top-[100%] -left-[90%] md:top-[90%] md:-left-[100%]"
            />
          </div>
        </div>
        <div className="w-full overflow-hidden mt-[30vh] md:mt-[60vh]  flex items-center justify-center">
          <div
          data-scroll
          data-scroll-speed="-.6"
          
          className=" text-center">
            <div className="flex gap-2 text-center items-center justify-center p-4 ">
              <svg
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon w-4"
              >
                <path
                  d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                  fill="currentColor"
                ></path>
              </svg>
              <h1 className="text-xl">In the Media</h1>
            </div>
            <div className="overflow-hidden">
              {["Spread", "The News"].map((item, index) => {
                return (
                  <h1 key={index} className="text-6xl md:text-[10rem] ">
                    <motion.span
                      initial={{ rotate: 90, y: "40%", opacity: 0 }}
                      whileInView={{ rotate: 0, y: 0, opacity: 1 }}
                      transition={{
                        ease: Power4.easeInOut,
                        duration: 1,
                      }}
                      className="inline-block  origin-left"
                    >
                      {item}
                    </motion.span>
                  </h1>
                );
              })}
            </div>

            <p className="text-lg md:text-4xl leading-none  tracking-tight mt-4">
              Find out more about our <br />
              work on these leading design <br />
              and technology platforms.
            </p>
            <button className="px-6 py-2 border-[1px] border-black mt-5 md:mt-10 rounded-full">
              Browse all news
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
