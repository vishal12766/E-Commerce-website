import React, { useEffect, useRef, useState } from "react";
import Contact from "./contact";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../Contexts/UserContext";
import { useContext } from "react";
import { CartContext } from "../Contexts/CartProvider";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useUser();
  const { itemCount } = useContext(CartContext);
  const navigate = useNavigate();
  const [hide, setHide] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const lastScroll = useRef(0);
  const [location, setlocation] = useState("San Francisco, CA")

  const handleLogout = async () => {
    await logout();
    setUserMenuOpen(false);
    navigate("/");
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
            );
            const data = await response.json();
            if (data?.address?.city || data?.address?.town) {
              setlocation(data.address.city || data.address.town || data.address.state || "San Francisco, CA")
            }
          } catch (error) {
            /* ignore */
          }
        },
        () => { /* ignore permission errors */ },
      );
    }

    const handleScroll = () => {
      const current = window.scrollY;
      const diff = current - lastScroll.current;
      if (diff > 25) setHide(true);
      if (diff < 0) setHide(false);
      lastScroll.current = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-30 transition-transform duration-300 ${
        hide ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Top Bar */}
      <div className="bg-[#541f03] h-10 w-full flex items-center justify-center gap-3 px-4">
        <p className="text-white text-xs sm:text-sm text-center">
          {location} |  Daily 10AM-10PM 
        </p>
        <Contact />
      </div>

      {/* Navbar */}
      <div className="bg-[#fff99f] text-[#541f03] h-16 lg:h-[90px] flex items-center justify-between px-4 lg:px-14">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl flex-shrink-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 text-[17px]">
          <li><Link to="/flavors" className="hover:opacity-70 transition">Flavors</Link></li>
          <li><Link to="/order" className="hover:opacity-70 transition">Order Online</Link></li>
          <li><Link to="/about" className="hover:opacity-70 transition">About</Link></li>
          <li><Link to="/event" className="hover:opacity-70 transition">Book an Event</Link></li>
        </ul>

        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="https://static.wixstatic.com/media/84770f_71803fcfa2ce4fb59c425d59cf8c0e0a~mv2.png"
            alt="Gelato"
            className="h-5 w-auto mr-60 lg:h-[25px]"
          />
        </Link>

        {/* Right actions */}
        <div className="flex items-center gap-3 sm:gap-5 flex-shrink-0">
          <Link to="/cart" className="relative hover:opacity-70 transition" aria-label="Cart">
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-[#541f03] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {itemCount}
              </span>
            )}
          </Link>

          {isAuthenticated ? (
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 hover:opacity-70 transition"
              >
                <i className="fa-solid fa-circle-user text-xl"></i>
                <span className="hidden sm:inline text-sm font-medium">{user?.name?.split(" ")[0]}</span>
              </button>
              {userMenuOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-xl w-52 overflow-hidden border border-gray-100 z-50">
                  <div className="px-4 py-3 bg-[#fff99f] border-b">
                    <p className="font-semibold text-sm text-[#541f03]">Hi, {user?.name}</p>
                    <p className="text-xs text-[#541f03]/70 truncate">{user?.email}</p>
                  </div>
                  <ul className="py-2 text-sm text-[#541f03]">
                    <li><Link to="/order" className="block px-4 py-2 hover:bg-gray-50" onClick={() => setUserMenuOpen(false)}>Order Ice Cream</Link></li>
                    <li><Link to="/cart" className="block px-4 py-2 hover:bg-gray-50" onClick={() => setUserMenuOpen(false)}>My Cart ({itemCount})</Link></li>
                    <li className="border-t mt-1 pt-1">
                      <button onClick={handleLogout} className="w-full text-left px-4 py-2 hover:bg-red-50 text-red-600">
                        Log Out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login" className="flex items-center gap-2 hover:opacity-70 transition">
              <i className="fa-solid fa-circle-user text-xl"></i>
              <span className="hidden sm:inline font-medium">Log In</span>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#fff99f] text-[#541f03] border-t border-[#541f03]/20">
          <ul className="flex flex-col items-center py-6 gap-4 text-lg">
            <li><Link to="/flavors" onClick={() => setMenuOpen(false)}>Flavors</Link></li>
            <li><Link to="/order" onClick={() => setMenuOpen(false)} >Order Online</Link></li>
            <li><Link to="/cart" onClick={() => setMenuOpen(false)}>Cart ({itemCount})</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
            <li><Link to="/event" onClick={() => setMenuOpen(false)}>Book an Event</Link></li>
            {!isAuthenticated && (
              <li><Link to="/login" onClick={() => setMenuOpen(false)} className="font-semibold">Log In / Sign Up</Link></li>
            )}
            {isAuthenticated && (
              <li><button onClick={handleLogout} className="font-semibold text-red-600">Log Out</button></li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
