import React, { useContext, useState } from "react";
import { CartContext } from "../Contexts/CartProvider";
import { Link } from "react-router";
import { useNavigate } from "react-router";


const Shipping = () => {
  const { cartItems, totalCost } = useContext(CartContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const DeliveryCharge = totalCost > 50 ? 0 : 5;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/order-success");
  };

  return (
    <div className="min-h-screen bg-[#FFF8F3] py-10 px-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-[#541F03] mb-10">
        📦 Shipping Details
      </h1>

      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Left Side - Shipping Form */}
        <div className="flex-1 bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-[#541F03] mb-6">
            Delivery Address
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#541F03]"
              />
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#541F03]"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  Phone
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#541F03]"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Address
              </label>

              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="House no., Street, Area"
                rows="3"
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#541F03] resize-none"
              />
            </div>

            {/* City + State */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  City
                </label>

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter city"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#541F03]"
                />
              </div>

              <div>
                <label className="block mb-2 font-semibold text-gray-700">
                  State
                </label>

                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Enter state"
                  required
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#541F03]"
                />
              </div>
            </div>

            {/* Pincode */}
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Pincode
              </label>

              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Enter pincode"
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#541F03]"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full mt-4 bg-[#541F03] text-white py-3 rounded-full hover:bg-[#3f1602] duration-300 font-semibold"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Right Side - Order Summary */}
        <div className="w-full lg:w-80 bg-white rounded-3xl shadow-lg p-6 h-fit">
          <h2 className="text-2xl font-bold text-[#541F03] mb-5">
            Order Summary
          </h2>

          {/* Items */}
          <div className="space-y-4 mb-5">
            {cartItems.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-14 h-14 rounded-xl object-cover"
                  />

                  <div>
                    <p className="font-semibold text-[#541F03]">
                      {item.name}
                    </p>

                    <p className="text-sm text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>
                </div>

                <span className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <hr className="my-4" />

          {/* Subtotal */}
          <div className="flex justify-between mb-3">
            <span>Subtotal</span>
            <span>${totalCost.toFixed(2)}</span>
          </div>

          {/* Delivery */}
          <div className="flex justify-between mb-3">
            <span>Delivery</span>

            <span>
              {DeliveryCharge === 0
                ? "FREE"
                : `$${DeliveryCharge.toFixed(2)}`}
            </span>
          </div>

          <hr className="my-4" />

          {/* Total */}
          <div className="flex justify-between text-xl font-bold text-[#541F03]">
            <span>Total</span>
            <span>${(totalCost + DeliveryCharge).toFixed(2)}</span>
          </div>

          {/* Back to cart */}
          <Link to="/cart">
            <button className="w-full mt-5 border border-[#541F03] text-[#541F03] py-3 rounded-full hover:bg-[#541F03] hover:text-white duration-300">
              ← Back to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
