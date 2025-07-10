import React from 'react';

import Heading from '../utility/Heading';
import { FaInstagram, FaXTwitter, FaYoutube, FaPinterestP } from "react-icons/fa6";
import LOGO from "../assets/svgImg/logo.svg";
import ButtonCommon from '../utility/ButtonCommon';

const Footer = () => {
  return (
    <footer className="w-full font-(family-name:--font-family)">
        <div className="bg-[#F4F4F4] common-padding">
          <div className="py-[80px] flex flex-col justify-center items-center mx-[250px]">
            <Heading  name={"Explore Popular Tags"} desc={"From quick meals to healthy dishes, our popular tags make it easy to explore delicious options with one click."} />

            <div className="flex justify-center items-center flex-wrap gap-3 text-[14px] font-[600] ">
              <ButtonCommon name={"Comfort Food"} style={' rounded-[40px] uppercase'}/>
              
              <ButtonCommon name={"Dairy-Free"} style={' rounded-[40px] uppercase'}/>
              
              <ButtonCommon name={"Desserts"} style={' rounded-[40px] uppercase'}/>
              
              <ButtonCommon name={"Gluten-Free"} style={' rounded-[40px] uppercase'}/>
              
              <ButtonCommon name={"Healthy"} style={' rounded-[40px] uppercase'}/>
              
              <ButtonCommon name={"High-Protein"} style={' rounded-[40px] uppercase'}/>
              
              <ButtonCommon name={"Holiday"} style={' rounded-[40px] uppercase'}/>
              
              <ButtonCommon name={"Kid-Friendly"} style={' rounded-[40px] uppercase'}/>
              
              <ButtonCommon name={"Low-Carb"} style={' rounded-[40px] uppercase'}/>
              
              <ButtonCommon name={"Meal Prep"} style={' rounded-[40px] uppercase'}/>
              
              <ButtonCommon name={"Meat"} style={' rounded-[40px] uppercase'}/>
              
              <ButtonCommon name={"One-Pot"} style={' rounded-[40px] uppercase'}/>
              
              <ButtonCommon name={"Quick Meals"} style={' rounded-[40px] uppercase'}/>
              
              <ButtonCommon name={"Spicy"} style={' rounded-[40px] uppercase'}/>

              <ButtonCommon name={"Vegetarian"} style={' rounded-[40px] uppercase'}/>
              
              <ButtonCommon name={"Video Recipe"} style={' rounded-[40px] uppercase'}/>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center common-padding">
          <div className="flex justify-between items-center py-[40px] gap-[28px_56px]">
            <ul className="flex justify-start items-center relative ">
              <li className="h-[45px] w-[45px] rounded-[50%] bg-[#DDDDDD] mx-[3px]">
                <FaInstagram className="absolute top-[16px] left-[18px] text-[14px]"/>
              </li>
              <li className="h-[45px] w-[45px] rounded-[50%] bg-[#DDDDDD] mx-[3px]">
                <FaXTwitter className="absolute top-[16px] left-[70px] text-[14px]"/>
              </li>
              <li className="h-[45px] w-[45px] rounded-[50%] bg-[#DDDDDD] mx-[3px]">
                <FaYoutube className="absolute top-[16px] right-[70px] text-[14px]"/>
              </li>
              <li className="h-[45px] w-[45px] rounded-[50%] bg-[#DDDDDD] mx-[3px]">
                <FaPinterestP className="absolute top-[16px] right-[18px] text-[14px]"/>
              </li>
            </ul>

            <ul className="flex justify-end items-center gap-[28px_56px] font-[600]">
              <li className="hover:text-[red] cursor-pointer">All Recipes</li>
              <li className="hover:text-[red] cursor-pointer">Video Recipes</li>
              <li className="hover:text-[red] cursor-pointer">A-Z Recipes</li>
              <li className="hover:text-[red] cursor-pointer">Refund Policy</li>
              <li className="hover:text-[red] cursor-pointer">Terms and Conditions</li>
              <li className="hover:text-[red] cursor-pointer">Contact Us</li>
            </ul>
          </div>
          <div className="py-[25px] border-t-1 border-[#DDDDDD] w-fit">
            <div className="common-padding flex flex-col items-center justify-center">
              <p className="pb-[18px] text-[15px] text-[#767676]">Platea offers a world of delicious recipes, cooking inspiration, and culinary tips. Explore new flavors, master techniques, and bring your passion for cooking to life.</p>
              <p className="pb-[18px] text-[14px]">© 2025 Platea. All rights reserved. Designed by Gloria Themes.</p>
              <div className="h-[25px]">
                <img src={LOGO} className="w-full h-[24px]" alt="Footer_logo" />
              </div>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer;