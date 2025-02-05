import React from "react";
import { FaArrowDown } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Power4 } from "gsap";

export default function Hero() {
  return (
    <div className="max-w-8xl md:w-full text-white ">
      <div className="relative overflow-hidden">
        <img
          data-scroll
          data-scroll-speed="-1"
          className="h-[200vh] md:h-full"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt=""
        />
        <div className="absolute top-0 left-0 mt-96 p-10 md:p-32">
          <div className="md:tracking-widest leading-5">
            {[
              " Global digital design studio partnering with",
              "brands and businesses that create exceptional",
              "experiences where people live",
              "work, and unwind.",
            ].map((item, index) => {
              return (
                <h2
                  key={index}
                  className=" text-2xl md:text-2xl overflow-hidden"
                >
                  {" "}
                  <motion.span
                    initial={{ rotate: 90, y: "100%", opacity: 0 }}
                    animate={{ rotate: 0, y: 0, opacity: 1 }}
                    transition={{
                      ease: Power4.easeInOut,
                      duration: 2,
                      delay: index * 0.5,
                    }}
                    className="inline-block  origin-left"
                  >
                    {item}
                  </motion.span>
                </h2>
              );
            })}
            {/* <h2 className=" text-2xl md:text-3xl overflow-hidden">
              {" "}
              <motion.span
                initial={{ rotate: 90, y: "100%", opacity: 0 }}
                animate={{ rotate: 0, y: 0, opacity: 1 }}
                transition={{ ease: Power4.easeInOut, duration: 0.7 }}
                className="inline-block  origin-left"
              >
                Global digital design studio partnering with{" "}
              </motion.span>
            </h2>
            <h2 className=" text-2xl md:text-3xl">
              brands and businesses that create exceptional{" "}
            </h2>
            <h2 className=" text-2xl md:text-3xl">
              experiences where people live, work, and unwind.{" "}
            </h2> */}
          </div>

          <div className="mt-7 md:mt-20 ">
            {["Digital " , " Design" , " Experience"].map((item, index) => {
                return (
                    <h1 key={index} className="text-6xl md:text-[30vh] font-light tracking-tighter">
                    <motion.span
                        initial={{ rotate: 90, y: "100%", opacity: 0 }}
                        animate={{ rotate: 0, y: 0, opacity: 1 }}
                        transition={{
                        ease: Power4.easeInOut,
                        duration: 2,
                        delay:1+ index * 0.5,
                        }}
                        className="inline-block  origin-left"
                    >
                        {item}
                    </motion.span>
                    </h1>
                );
            })}

          </div>

          <div className="mt-16 md:mt-20">
            <FaArrowDown className="text-4xl animate-bounce" />
          </div>

          <div className="para mt-16 md:mt-20  md:w-1/2">
            <p className="text-3xl ">
              We help experience-driven companies thrive by making their
              audience feel the refined intricacies of their brand and product
              in the digital space. Unforgettable journeys start with a click.
            </p>
            <button className="px-7 rounded-full border-[1px] bordre-white hover:border-gray-700 py-2 underline mt-20 md:mt-32">
              {" "}
              The Studio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
