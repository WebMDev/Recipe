import React from 'react';
import LOGO from "../assets/svgImg/Logo.svg";
import { FaAngleDown } from "react-icons/fa6";
import { MdBookmarkBorder } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import ButtonCommon from '../utility/ButtonCommon';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  const handleBtn = () => {
    navigate('/addrecipe')
  }

  return (
    <header className="h-[80px] w-full bg-white text-black flex justify-between items-center font-(family-name:--font-family) font-[500] text-[18px] mb-2 common-padding">

      <div className="w-full flex justify-start items-center">
        <div className="mr-8 cursor-pointer">
          <img src={LOGO} alt="" />
        </div>

        <ul className="flex justify-center items-center">
          <li className=" p-[8px_16px] hover:text-[red] hover:bg-[#FAF4F4] hover:rounded-4xl cursor-pointer">Home</li>
          <li className=" p-[8px_16px] hover:text-[red] hover:bg-[#FAF4F4] hover:rounded-4xl cursor-pointer">Recipes</li>
          <li className=" p-[8px_16px] hover:text-[red] hover:bg-[#FAF4F4] hover:rounded-4xl cursor-pointer">Cuisines</li>
          <li  className="flex justify-center items-center p-[8px_16px] hover:text-[red] hover:bg-[#FAF4F4] hover:rounded-4xl cursor-pointer" >Categories <FaAngleDown /></li>
          <li className=" p-[8px_16px] hover:text-[red] hover:bg-[#FAF4F4] hover:rounded-4xl cursor-pointer">Blog</li>
          <li className=" p-[8px_16px] hover:text-[red] hover:bg-[#FAF4F4] hover:rounded-4xl cursor-pointer">Features</li> 
        </ul>
      </div>

      <div className="w-full flex justify-end items-center gap-4">
        <MdBookmarkBorder className="h-[25px] w-[22px] hover:text-[red] cursor-pointer"/>
        <LuUser className="h-[25px] w-[22px] hover:text-[red] cursor-pointer"/>
        <HiMiniMagnifyingGlass className="h-[25px] w-[22px] hover:text-[red] cursor-pointer"/>
        <ButtonCommon name={"Add Recipe"} style={'p-[12px_22px] bg-gray-200 rounded-lg'} onClick={handleBtn} />
      </div> 
        
    </header>
  )
}

export default Navbar;