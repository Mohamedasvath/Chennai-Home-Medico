import React, { useState, useEffect } from "react";
import { Phone, Menu, X, HeartPulse } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const phoneNumber = "+919952388983";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur shadow-md py-3"
          : "bg-white py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* LOGO */}
          <div className="flex items-center space-x-2 cursor-pointer group">
            <div className="bg-blue-600 p-2 rounded-xl shadow-md transition-transform group-hover:scale-105">
              <HeartPulse className="text-white w-6 h-6" />
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900 leading-none tracking-tight">
                CHENNAI <span className="text-blue-600">CARE</span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium">
                Home Nursing
              </span>
            </div>
          </div>

          {/* DESKTOP */}
          <div className="hidden md:flex items-center space-x-8">

            {/* PHONE */}
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-200 font-semibold"
            >
              <Phone className="w-4 h-4 mr-2 text-blue-600" />
              +91 9952388983
            </a>

            {/* CTA → CALL */}
            <a
              href={`tel:${phoneNumber}`}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Book Service
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="w-7 h-7 text-gray-800" />
              ) : (
                <Menu className="w-7 h-7 text-gray-800" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute w-full bg-white border-b transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-4 py-5 space-y-4 shadow-lg">

          {/* CALL */}
          <a
            href={`tel:${phoneNumber}`}
            className="flex items-center justify-center w-full py-3 text-lg font-semibold text-gray-800 bg-gray-100 rounded-xl"
          >
            <Phone className="w-5 h-5 mr-2 text-blue-600" />
            Call Now
          </a>

          {/* BOOK → CALL */}
          <a
            href={`tel:${phoneNumber}`}
            className="block w-full text-center bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-md"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;