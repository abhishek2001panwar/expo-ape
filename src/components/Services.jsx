import React, { useRef } from "react";
import { useEffect } from "react";
import { gsap, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Services() {

    const parent = useRef(null);
    const child = useRef(null);

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);
        gsap.to(child.current ,{
            scrollTrigger:{
                trigger: parent.current,
                start: "0 0",
               
                scrub: 1,
                pin: true,
            },
           width: "60%",
           height: "60%",
          ease : Power4
        })
    })
  return (
    <div   ref={parent} className="w-full h-screen flex items-center flex-col  justify-between bg-black text-white ">
      <div className="heading  mt-20 flex gap-3 p-10 ">
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
        <h1>Work in motion</h1>
      </div>
      <div className="flex  items-center gap-2 md:gap-10 py-10 ">
        <h1 className=" text-5xl md:text-9xl font-regular ">Play</h1>
        <video
        ref={child}
          autoPlay
          muted
          loop
          className="aspect-video w-52 md:w-60"
          src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"
        ></video>
        <h1 className=" text-5xl md:text-9xl font-regular ">Reel</h1>
      </div>
      <div className="text-center p-10">
        <p>
          Our work is best experienced in motion. Don’t <br /> forget to put on
          your headphones.
        </p>
      </div>
    </div>
  );
}
