import React from "react";
import Heading from "./heading";
import Button from "./button";

const Slide2 = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">

        {/* Dairy Free */}
        <div className="bg-[#FFF99F] flex flex-col justify-center items-center py-16 px-6">
          <Heading head1="Enjoy" head2="Dairy Free" />

          <div className="mt-10">
            <Button
              content="Order Online"
              bg="bg-[#541F03]"
              color="text-[#fff99f]"
              work="/order"
            />
          </div>
        </div>

        {/* Image */}
        <div>
          <img
            className="w-full h-[350px] md:h-[500px] lg:h-full object-cover"
            src="https://static.wixstatic.com/media/cc40ca_ad0292ccd0b74bf0b9f646f650b66049~mv2.png/v1/fill/w_950,h_864,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/yuval_Image%20Upscale%20_%20Real-ESRGAN_2026-02-28_16-57-36.png"
            alt=""
          />
        </div>

        {/* About */}
        <div className="bg-[#f4f6f6] flex flex-col justify-center items-center py-16 px-6">

          <Heading head1="Our Story" head2="About Us" />

          <p className="max-w-md text-center text-[16px] md:text-[18px] text-[#541F03] mt-8 mb-10 leading-7">
            I'm a paragraph. Click here to add your own text and edit me.
            It’s easy. Just click "Edit Text" or double click me to add
            your own content and make changes to the font.
          </p>

          <Button
            content="Read More"
            color="text-[#541F03]"
            work="/about"
          />
        </div>

        {/* Image */}
        <div>
          <img
            className="w-full h-[350px] md:h-[500px] lg:h-full object-cover"
            src="https://static.wixstatic.com/media/84770f_c7523a1da76b4e71a12e666b15e5254f~mv2.png/v1/fill/w_896,h_816,fp_0.50_0.50,q_90,enc_auto/Ice%20Cream%20Tempalte_Gemini%203%20(Nano%20Banana%20Pro)_2026-02-25_15-49-02.png"
            alt=""
          />
        </div>

      </div>
    </div>
  );
};

export default Slide2;