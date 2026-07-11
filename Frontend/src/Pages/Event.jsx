import React from "react";
import Heading from "../Components/heading";
import Button from "../Components/button";

const Event = () => {
  return (
    <div>
      <div className="bg-[#541F03] h-80 flex justify-center items-center">
        <Heading color="text-white" head1="Catering & more" head2="Events" />
      </div>
      <div className="bg-white  my-20">
        <div className="flex-col justify-center place-content-center place-items-center ">
          <Heading
            head1="For The Best Party!"
            head2="The Best Ice Cream
"
          />
          <div className="mt-10"></div>
          <p className="w-[410px] h-[94px] mb-10 text-center text-[18px] text-[#541F03] font-light">
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you.
          </p>
        </div>
      </div>

      <div className="flex-col flex justify-center items-center mt-36 text-[#541F03]">
        <a href="#">
          <img
            className="h-[616px]"
            src="https://static.wixstatic.com/media/84770f_0e1a33237ff64eb3bcb2c61dfea231b4~mv2.jpg/v1/fill/w_770,h_770,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_0e1a33237ff64eb3bcb2c61dfea231b4~mv2.jpg"
            alt=""
          />
        </a>

        <div className=" mb-32 w-[616px]">
        <div className="">
            <h1 className="text-sm mb-6 mt-8">ICE CREAM CART</h1>
            <hr />
            <p className="mt-6 text-sm mb-2 font-extralight opacity-80">4hr</p>
            <p className="mb-6 text-sm font-extralight opacity-80">$200</p>
            <Button content="BOOK NOW" bg="bg-[#541F03]" color="text-[#fff99f]" work='/book'/>
        </div>
      </div>


      </div>

      
    </div>
  );
};

export default Event;
