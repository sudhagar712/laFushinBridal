import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center px-4 py-6 text-white">
        {/* Logo */}
        <div className="text-xl font-bold">La Spa</div>

       

        {/* Offcanvas Toggle (Always visible) */}

        <div className="flex items-center gap-5">
          <div>
            <button className="border mt-4 py-2 px-4 uppercase text-[10px] md:text-md w-fit">
              Let's Connect
            </button>
          </div>
          <button
            onClick={() => setMenuOpen(true)}
            className="text-2xl focus:outline-none"
          >
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Offcanvas Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[70%] md:w-[50%] bg-white text-gray-500 transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-xl font-semibold">La Spa</h2>
          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            <FiX />
          </button>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
