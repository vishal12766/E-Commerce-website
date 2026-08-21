import React from "react";
import Navbar from "./Components/navbar";
import Homepage from "./Pages/Homepage";
import Footer from "./Components/footer";
import { Routes, BrowserRouter, Route, Navigate } from "react-router-dom";
import Flavors from "./Pages/Flavors";
import About from "./Pages/About";
import Event from "./Pages/Event";
import Book from "./Pages/Book";
import Order from "./Pages/Order";
import ProductProvider from "./Contexts/ProductProvider";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import MainLayout from "./MainLayout";
import Cart from "./Pages/Cart";
import CartProvider from "./Contexts/CartProvider";
import { useState, useEffect } from "react";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await fetch("http://localhost:3000/me", {
          credentials: "include",
        });

        if (response.status === 401) {
          setUser(null);
          return;
        }

        const data = await response.json();

        if (response.ok) {
          setUser(data.user);
        }
      } catch (error) {
        console.log(error);
      }
    };

    checkUser();
  }, []);

  return (
    <>
      <ProductProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<MainLayout user={user} setUser={setUser} />}>
                <Route path="/" element={<Homepage />} />
                <Route path="/flavors" element={<Flavors />} />
                <Route path="/about" element={<About />} />
                <Route path="/event" element={<Event />} />
                <Route path="/book" element={<Book />} />
                <Route path="/order" element={<Order />} />
                <Route path="/cart" element={<Cart />} />
              </Route>
              <Route path="/login" element={<Login setUser={setUser} />} />
              <Route path="/signup" element={<Signup setUser={setUser} />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </ProductProvider>
    </>
  );
};

export default App;
