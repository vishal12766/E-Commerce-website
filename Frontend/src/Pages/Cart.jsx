import React from "react";
import { CartContext } from "../Contexts/CartProvider";
import { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router";
import { useState } from "react";

const Cart = () => {
  const [DeliveryCharge, setDeliveryCharge] = useState(0);
  const { cartItems, addToCart, totalCost ,increaseQuantity, decreaseQuantity, } = useContext(CartContext);
  
  useEffect(() => {
    console.log("Cart:", cartItems);
  }, [cartItems]);

  return (
    <div className="min-h-screen bg-[#FFF8F3] py-10 px-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-[#541F03] mb-10">
        🛒 Your Cart
      </h1>

      {/* Cart Items */}
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Side */}
        <div className="flex-1 bg-white rounded-3xl shadow-lg p-6">
          {cartItems.length > 0 ? (
            cartItems.map((item, idx) => (
              <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-5">
                  <img
                    src={item.img}
                    alt="shlk"
                    className="w-24 h-24 rounded-xl object-cover"
                  />

                  <div>
                    <h2 className="text-xl font-bold text-[#541F03]">
                      {item.name}
                    </h2>
                    <p className="text-gray-500">${item.price}</p>
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-3">
                  <button onClick={()=>{decreaseQuantity(item.name)}} className="w-8 h-8 rounded-full bg-gray-200 text-lg">
                    -
                  </button>

                  <span className="font-semibold">{item.quantity}</span>

                  <button onClick={()=>{increaseQuantity(item.name)}} className="w-8 h-8 rounded-full bg-[#541F03] text-white">
                    +
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-4xl">Cart is empty</div>
          )}
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-80 bg-white rounded-3xl shadow-lg p-6 h-fit">
          <h2 className="text-2xl font-bold text-[#541F03] mb-5">
            Order Summary
          </h2>

          <div className="flex justify-between mb-3">
            <span>Subtotal</span>
            <span>${totalCost}</span>
          </div>

          <div className="flex justify-between mb-3">
            <span>Delivery</span>
            <span>${DeliveryCharge}</span>
          </div>

          <hr className="my-4" />

          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>${totalCost + DeliveryCharge}</span>
          </div>

          <button className="w-full mt-6 bg-[#541F03] text-white py-3 rounded-full hover:bg-[#3f1602] duration-300">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
