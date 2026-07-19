import Button from "../Components/button";
import React, { useState } from "react";
import Calendar from "react-calendar";



const Book = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="text-[#541F03] px-4 md:px-28 pt-6">
      <a href="/event">
        <i class="fa-solid fa-angle-left"></i> Back
      </a>
      <div className="mt-10 ">
        <h1 className="text-3xl font-bold">Schedule your service</h1>
        <h2 className="mt-4">
          Check out our availability and book the date and time that works for
          you
        </h2>
      </div>
      <div className="mt-10 md:mt-16 flex flex-col lg:flex-row gap-8 mb-4">
        <div className="flex-1">
          <h2 className="font-bold text-2xl">Select a Date and Time</h2>
          <hr className="border-[#541F03]" />
          <div className="p-4 bg-white rounded-xl text-center mt-4">
            <Calendar onChange={setDate} value={date} />
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <h2 className="font-bold text-gray-500 mb-2">Time zone</h2>
          <hr className="border-[#541F03]" />
          <p className="mt-10">Availability for {date.toDateString()}</p>
        </div>
        <div className="w-full lg:w-1/3">
          <h2 className="font-bold text-2xl">Service Details</h2>
          <hr className="border-[#541F03]" />
          <p className="my-6">ICE CREAM CART</p>
          <Button content='Next' bg='bg-[gray]' color='text-white'/>
        </div>
      </div>
    </div>
  );
};

export default Book;
