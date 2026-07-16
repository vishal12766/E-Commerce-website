import React from "react";
import Button from "./button";
import Heading from "./heading";

const slide = (props) => {
  return (
    <div className="relative mt-20 h-[736.5px]">
      <img
        className="scale-125"
        src="https://static.wixstatic.com/media/84770f_909a2491571c4b5fb837fd1bfe6467c2~mv2.jpg/v1/fill/w_2281,h_981,fp_0.52_0.64,q_90,usm_0.66_1.00_0.01,enc_auto/untitled_Topaz%20Image%20Upscale_2026-02-24_14-38-18.jpg"
        alt=""
      />

      <div className="absolute top-6 w-full flex justify-center">
        <Heading head1="Fresh N'Tasty!" head2="Our Flavors" />
      </div>

      <div className="absolute bottom-10 left-16 right-24 flex justify-between">
        <p className="w-[330px] text-[#541f03]">
          This is the space to introduce your Product section. Showcase the
          types of products available and underline any important or unique
          features.
        </p>

        <div className="mt-6">
            <Button
          content="Explore Menu"
          bg="bg-transparent"
          color="text-[#541F03]"
          work='/Gelato/flavors'
        />
        </div>
      </div>
    </div>
  );
};

export default slide;
