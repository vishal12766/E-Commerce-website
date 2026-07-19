import React from "react";
import Button from "./button";

const HeroImg = () => {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <img
        className="w-full h-[60vh] md:h-[75vh] lg:h-screen object-cover"
        src="https://static.wixstatic.com/media/84770f_871543df4c1c468b8bf9d1697039314d~mv2.jpg/v1/fill/w_1901,h_1011,fp_0.52_0.19,q_85,usm_0.66_1.00_0.01,enc_auto/Fintech-Product-Demo-Deck_Gemini-3-(Nano-Banana-Pro)_2026-02-15_12-57-05.jpg"
        alt=""
      />

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-4">

        <h1 className="text-[#fff99f] text-5xl sm:text-7xl md:text-8xl lg:text-[170px] xl:text-[220px] font-bold font-serif text-center leading-none">
          Ice Cream
        </h1>

        <div className="mt-6 w-full max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <h2 className="text-[#fff99f] text-xl sm:text-3xl lg:text-[36px] font-bold font-serif">
            Hand Crafted
          </h2>

          <Button
            content="Our Flavors"
            bg="bg-[#541F03]"
            color="text-[#fff99f]"
            work="/flavors"
          />
        </div>

      </div>
    </div>
  );
};

export default HeroImg;