import React from "react";
import { Link } from "react-router";

const OrderSuccess = () => {
  return (
    <div className="min-h-screen bg-[#FFF8F3] flex items-center justify-center px-6">
      <div className="bg-white rounded-3xl shadow-lg p-10 max-w-lg w-full text-center">

        {/* Success Icon */}
        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
          <span className="text-5xl">✓</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-[#541F03] mb-4">
          Order Placed!
        </h1>

        {/* Message */}
        <p className="text-gray-600 text-lg mb-2">
          Thank you for your order! 🎉
        </p>

        <p className="text-gray-500 mb-8">
          Your order has been successfully placed and will be delivered soon.
        </p>

        {/* Order ID */}
        <div className="bg-[#FFF8F3] rounded-2xl p-4 mb-8">
          <p className="text-sm text-gray-500">
            Order ID
          </p>

          <p className="font-bold text-[#541F03] text-lg">
            #ORD-{Math.floor(Math.random() * 900000 + 100000)}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <Link to="/">
            <button className="w-full bg-[#541F03] text-white py-3 rounded-full hover:bg-[#3f1602] duration-300 font-semibold">
              Continue Shopping
            </button>
          </Link>

          <Link to="/cart">
            <button className="w-full border border-[#541F03] text-[#541F03] py-3 rounded-full hover:bg-[#541F03] hover:text-white duration-300">
              View Cart
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default OrderSuccess;
