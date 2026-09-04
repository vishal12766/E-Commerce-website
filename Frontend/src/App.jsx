import React from "react";
import Homepage from "./Pages/Homepage";
import { Routes, BrowserRouter, Route } from "react-router-dom";
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
import Shipping from "./Pages/Shipping";
import OrderSuccess from "./Pages/OrderSuccess";
import ProtectedRoute from "./Components/ProtectedRoute";
import { UserProvider } from "./Contexts/UserContext";

const App = () => {
  return (
    <>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<MainLayout />}>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/flavors" element={<Flavors />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/event" element={<Event />} />
                  <Route path="/book" element={<Book />} />
                  <Route path="/order-success" element={<OrderSuccess />} />
                  <Route
                    path="/order"
                    element={
                      <ProtectedRoute>
                        <Order />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/cart"
                    element={
                      <ProtectedRoute>
                        <Cart />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/shipping"
                    element={
                      <ProtectedRoute>
                        <Shipping />
                      </ProtectedRoute>
                    }
                  />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </BrowserRouter>
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </>
  );
};

export default App;
