import React from "react";
import { motion } from "framer-motion";
import { Power4 } from "gsap";
import { Expo } from "gsap/all";

export default function Work() {
  return (
    <div className="w-full p-5 md:p-10">
      {/* Title */}
      <div className="flex mt-10 md:mt-20 items-center mb-20 md:mb-32 justify-start md:px-32 md:py-20">
        <h1 className="text-8xl tracking-tighter md:text-[10rem] lg:text-[15rem] font-bold overflow-hidden">
          <motion.span
            initial={{ rotate: 90, y: "40%", opacity: 0 }}
            whileInView={{ rotate: 0, y: 0, opacity: 1 }}
            transition={{
              ease: Power4.easeInOut,
              duration: 1,
              delay: 0.5,
            }}
            className="origin-left inline-block"
          >
            Work
          </motion.span>
        </h1>
      </div>

      <div className="md:px-32">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 h-auto">
          {/* Card 1 - Image/Video */}
          <div className="flex flex-col">
            <div className="featured flex gap-4 md:gap-2 text-lg md:text-2xl">
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
              <p className="text-xl md:text-3xl">Featured Projects</p>
            </div>
            <p className="text-lg md:text-2xl mt-10">
              Highlights of cases that we passionately built with
              forward-thinking clients and friends over the years.
            </p>

            {/* Second Image/Video */}
            <div className="relative md:w-[50vh] h-[70vh] md:h-[50vh]  mt-32 overflow-hidden">
              <video
                autoPlay
                loop
                muted
                className=" block  z-[1]  w-full h-full object-cover"
                src="https://player.vimeo.com/progressive_redirect/playback/1020697798/rendition/720p/file.mp4?loc=external&log_user=0&signature=cd45f23683db91c40f08a3f4a31ba153f1e93eac3d4f98cb3ca4b651b8830d04"
              ></video>
              <motion.img
               initial={{opacity:0}}
               whileHover={{opacity:1}} 
              data-scroll
                data-scroll-speed="-.3"
                className="rounded-xs hidden sm:block  sm:absolute sm:z-[2] sm:top-0 sm:left-0 w-full h-full object-cover rounded-xs"
                src="https://a.storyblok.com/f/133769/2409x3000/c155d3e27e/amaterasu-hero.jpg/m/1300x1619/filters:quality(90)"
                alt="Project Image"
              />
            </div>
          </div>
          <div className="relative w-full h-[60vh] md:h-screen overflow-hidden">
            <video
              autoPlay
              loop
              muted
              className="absolute z-[999] hidden w-full h-full object-cover"
              src="https://player.vimeo.com/progressive_redirect/playback/1047169994/rendition/720p/file.mp4?loc=external&log_user=0&signature=780c70237c241a1fe7a4b3837cad974ed7fb98f38cd2e6f912752ff9e44107ee"
            ></video>
            <motion.img 
          
            data-scroll
              data-scroll-speed="-.3"
              className="rounded-xs w-full h-full object-cover"
              src="https://a.storyblok.com/f/133769/2400x2990/729680ed7f/ottografie-2025-hero.jpg/m/1300x1620/filters:quality(90)"
              alt="Work Image"
            />
          </div>

          {/* Card 2 - Description */}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 h-auto mt-8 md:mt-80 ">
          {/* Card 3 - Image/Video */}
          <div className="relative md:w-[40vh] h-[70vh] md:h-[60vh] overflow-hidden">
            <video
              autoPlay
              loop
              muted
              className="absolute z-[999] hidden w-full h-full object-cover"
              src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"
            ></video>
            <img 
            data-scroll
              data-scroll-speed="-.2"
              className="rounded-xs w-full h-full object-cover"
              src="https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)"
              alt="Project Image"
            />
          </div>

          {/* Card 4 - Image/Video */}
          <div className="relative md:w-[60vh] h-[70vh] md:h-[90vh] overflow-hidden">
            <video
              autoPlay
              loop
              muted
              className="absolute z-[999] hidden w-full h-full object-cover"
              src="https://player.vimeo.com/progressive_redirect/playback/1001982172/rendition/720p/file.mp4?loc=external&log_user=0&signature=b92eb1ab8119f2ffaaa03f075ef271714f5ee63065ee8d29f4e188ce30202de0"
            ></video>
            <img 
            data-scroll
              data-scroll-speed="-.3"
              className="rounded-xs w-full h-full object-cover"
              src="https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)"
              alt="Project Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
