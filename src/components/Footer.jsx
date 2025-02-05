import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-screen  mt-32 bg-black text-gold text-white ">
      <div className="inner-mal  max-w-8xl mx-32 ">
        <div className="flex gap-20 border-b-[1px] border-white mb-2">
          <div className="flex-col">
            <h1 className="text-[10rem]">Our</h1>
            <h1 className="text-[10rem]">Story</h1>
            <h1 className="text-2xl mb-5">
              The story behind Exo Ape is  one of <br />
               exploration, creativity and
              curiosity.
            </h1>
          </div>
        </div>

        <div className="flex gap-32 mt-16">
            <div className=" flex  gap-3 flex-col  ">
                <a href="">Shakepear</a>
                <a href="">Wililiam</a>
                <a href="">Nicolus</a>
                <a href="">Tesla</a>
            </div>
            <div className=" flex  gap-3 flex-col ">
                <a href="">Work</a>
                <a href="">Studio</a>
                <a href="">News</a>
                <a href="">Contact</a>
            </div>
            <div className=" flex  gap-3 flex-col ">
                <a href="">Dribble</a>
                <a href="">Instagram</a>
                <a href="">Telegram</a>
                <a href="">facebook</a>
            </div>

        </div>
      </div>
    </div>
  );
}
