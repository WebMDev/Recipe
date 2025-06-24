import React, { useState } from 'react';
import LOGO from "../assets/svgImg/Logo.svg";
import { FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
import { MdBookmarkBorder } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import ButtonCommon from '../utility/ButtonCommon';
import { Link, useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/AuthSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const user = useSelector((state) => state.auth.user);

  const handleBtn = () => {
    navigate('/addrecipe');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    
    dispatch(logout());
    navigate("/");
  };

  return (
    <header className="bg-white text-black font-[500] mb-2 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16">
      <div className="flex justify-between items-center h-[70px] sm:h-[72px] md:h-[76px] lg:h-[78px] xl:h-[80px]">
        <div className="flex items-center">
          <img src={LOGO} alt="Logo" className="h-8 sm:h-9 md:h-10 w-auto mr-4 sm:mr-6" />

          {/* Full menu - shown only on xl and above */}
          <ul className="hidden xl:flex items-center gap-2 2xl:gap-4 text-sm lg:text-base 2xl:text-lg">
            <li className="px-3 lg:px-4 py-1.5 hover:text-red-600 hover:bg-[#FAF4F4] rounded-3xl">
              <Link to="/">Home</Link>
            </li>
            <li className="px-3 lg:px-4 py-1.5 hover:text-red-600 hover:bg-[#FAF4F4] rounded-3xl">
              <Link to="/recipes">Recipes</Link>
            </li>
            <li className="px-3 lg:px-4 py-1.5 hover:text-red-600 hover:bg-[#FAF4F4] rounded-3xl">
              <Link to="/cuisines">Cuisines</Link>
            </li>
            <li className="flex items-center px-3 lg:px-4 py-1.5 hover:text-red-600 hover:bg-[#FAF4F4] rounded-3xl cursor-pointer">
              <Link to="/categories">Categories</Link>
              <FaAngleDown className="ml-1" />
            </li>
            <li className="px-3 lg:px-4 py-1.5 hover:text-red-600 hover:bg-[#FAF4F4] rounded-3xl">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="px-3 lg:px-4 py-1.5 hover:text-red-600 hover:bg-[#FAF4F4] rounded-3xl">
              <Link to="/features">Features</Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <HiMiniMagnifyingGlass className="h-5 sm:h-6 w-5 sm:w-6 hover:text-red-600 cursor-pointer" />
          <Link to="/favorites">
            <MdBookmarkBorder className="h-5 sm:h-6 w-5 sm:w-6 hover:text-red-600" />
          </Link>

          {user ? (
            <>
              <img
                src={user.profilePicture}
                alt="Profile"
                className="h-7 sm:h-8 w-7 sm:w-8 rounded-full cursor-pointer"
                onClick={() => navigate("/profile")}
              />
              <ButtonCommon
                name="Logout"
                style="px-2 py-1 sm:px-3 sm:py-1.5 bg-gray-200 rounded-md text-xs sm:text-sm"
                onClick={handleLogout}
              />
            </>
          ) : (
            <LuUser
              className="h-5 sm:h-6 w-5 sm:w-6 hover:text-red-600 cursor-pointer"
              onClick={() => navigate("/login")}
            />
          )}

          {/* ✅ Add Recipe button (always visible) */}
          <ButtonCommon
            name="Add Recipe"
            style="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-200 rounded-md text-xs sm:text-sm md:text-base"
            onClick={handleBtn}
          />

          {/* 🍔 Hamburger icon only on small screens */}
          <button
            className="xl:hidden ml-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu - shown on <xl */}
      {isOpen && (
        <nav className="xl:hidden bg-white border-t border-gray-200 py-2">
          <ul className="flex flex-col gap-2 px-4 text-sm sm:text-base">
            <li className="py-2 hover:text-red-600 hover:bg-[#FAF4F4] rounded-3xl">
              <Link to="/">Home</Link>
            </li>
            <li className="py-2 hover:text-red-600 hover:bg-[#FAF4F4] rounded-3xl">
              <Link to="/recipes">Recipes</Link>
            </li>
            <li className="py-2 hover:text-red-600 hover:bg-[#FAF4F4] rounded-3xl">
              <Link to="/cuisines">Cuisines</Link>
            </li>
            <li className="flex items-center py-2 hover:text-red-600 hover:bg-[#FAF4F4] rounded-3xl">
              Categories <FaAngleDown className="ml-1" />
            </li>
            <li className="py-2 hover:text-red-600 hover:bg-[#FAF4F4] rounded-3xl">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="py-2 hover:text-red-600 hover:bg-[#FAF4F4] rounded-3xl">
              <Link to="/features">Features</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;