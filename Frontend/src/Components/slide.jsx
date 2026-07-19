import React from "react";
import Button from "./button";
import Heading from "./heading";              

const Slide = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <img
        className="w-full h-[350px] md:h-[650px] lg:h-[736px] object-cover"
        src="https://static.wixstatic.com/media/84770f_909a2491571c4b5fb837fd1bfe6467c2~mv2.jpg/v1/fill/w_2281,h_981,fp_0.52_0.64,q_90,usm_0.66_1.00_0.01,enc_auto/untitled_Topaz%20Image%20Upscale_2026-02-24_14-38-18.jpg"
        alt=""
      />

      {/* Heading */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full px-4 flex justify-center h-30 ">
        <Heading head1="Fresh N'Tasty!" head2="Our Flavors" />
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-8  lg:bottom-10 w-full px-6 lg:px-16">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-6">
          <p className="max-w-[330px] hidden lg:inline text-[#541f03] text-center md:text-left">
            This is the space to introduce your Product section. Showcase the
            types of products available and underline any important or unique
            features.
          </p>

          <Button
            content="Explore Menu"
            bg="bg-transparent"
            color="text-[#541F03]"
            work="/flavors"
          />
        </div>
      </div>
    </div>
  );
};

export default Slide;