import React, { useContext } from "react";
import { ProductContext } from "../Contexts/ProductProvider";
import { useState, useEffect } from "react";
import { CartContext } from "../Contexts/CartProvider";
import { Link } from "react-router";
import Button from "../Components/button";

const Order = () => {
  const { Products } = useContext(ProductContext);
  const { cartItems, addToCart, totalCost, Quantity } = useContext(CartContext);

  const icecream = Products.length > 0 ? Products[0]["Ice Cream Flavors"] : [];

  const dairyfree =
    Products.length > 1 ? Products[1]["Dairy Free Flavors"] : [];

  const [addeditem, setaddeditem] = useState([]);
  const [toast, setToast] = useState({
    show: false,
    message: "",
  });

  const handleAdd = (item) => {
    addToCart(item);

    setToast({
      show: true,
      message: `${item.name} added to cart!`,
    });

    setTimeout(() => {
      setToast({
        show: false,
        message: "",
      });
    }, 2000);
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const Card = ({ item }) => (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 duration-300 overflow-hidden">
      <img
        src={item.img}
        alt={item.name}
        className="w-full h-56 object-contain"
      />

      <div className="p-5">
        <h2 className="text-xl font-bold text-[#541F03]">{item.name}</h2>

        <p className="text-gray-500 text-sm mt-2 h-12">{item.description}</p>

        <div className="flex justify-between items-center mt-5">
          <span className="text-2xl font-bold text-pink-600">
            ${item.price}
          </span>

          <button
            onClick={() => handleAdd(item)}
            className="
                  bg-[#541F03]
                  text-white
                  px-5
                  py-2
                  rounded-full
                  transition-all
                  duration-150
                  active:scale-90
                  active:bg-[#3b1502]
                  active:shadow-inner
                  active:translate-y-1
                  select-none
                  touch-manipulation
                "
          >
            Add +
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FFF8F3] py-12 px-6">
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-5xl font-bold text-[#541F03]">
          🍦 Order Ice Cream
        </h1>
        <p className="text-gray-600 mt-3">Choose your favorite flavor</p>
      </div>

      <div className="sticky flex justify-end left-10 right-3 bottom-1 top-36 z-50">
        <Link to="/cart">
          <button className="w-36 bg-[#541F03] text-white h-12 rounded-lg">
            Cart
          </button>
        </Link>
      </div>

      {/* Ice Cream */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-[#541F03] mb-8">
          Ice Cream Flavors
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {icecream.map((item) => (
            <Card key={item.name} item={item} />
          ))}
        </div>
      </div>

      {/* Dairy Free */}
      <div>
        <h2 className="text-3xl font-bold text-[#541F03] mb-8">
          Dairy Free Flavors
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {dairyfree.map((item) => (
            <Card key={item.name} item={item} />
          ))}
        </div>
      </div>
      <div
        className={`fixed bottom-6 left-0 right-0 flex justify-center z-50
    transition-all duration-500
    ${toast.show ? "opacity-100" : "opacity-0 pointer-events-none"}
  `}
      >
        <div className="bg-[#541F03] text-white px-6 py-3 rounded-full shadow-xl">
          🍦 {toast.message}
        </div>
      </div>
    </div>
  );
};

export default Order;
