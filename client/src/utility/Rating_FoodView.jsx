import React from 'react';
import HERO2 from "../assets/section-bg.jpg";
import STAR from "../assets/svgImg/star.svg";

const Rating_FoodView = () => {
  return (
    // Rateing & View Food Section
    <div className="common-padding">
        <div className="relative flex justify-center items-center w-full pb-[60px]">
          <img src={HERO2} className="rounded-2xl" alt="" />

          <div className="absolute top-0 right-[15%] my-[100px] flex flex-col justify-start h-full w-[600px]">

              <div className="flex justify-start items-center gap-3 font-[500] mb-5">
              <div className="flex justify-center items-center text-[14px] gap-2 p-[5px_10px] rounded-2xl bg-[#fefce8]">
                  <img src={STAR} alt="" />
                  <span>5.0</span>
              </div>
              <div className="">score from 10.000 rating</div>
              </div>

              <h3 className="text-[52px] leading-[1.1] mb-6 font-[600] w-full">Discover fresh and easy recipes to inspire your meals every day.</h3>

              <p className="text-[16px] leading-[1.7] mb-15">Discover fresh and easy recipes for every meal. From quick breakfasts and light lunches to hearty dinners and indulgent desserts, find endless inspiration to make cooking simple, fun, and enjoyable for any occasion or gathering!</p>

              <button className="w-fit p-[13px_22px] bg-white font-[500] text-[14px] rounded-[10px] hover:bg-[red] hover:text-white cursor-pointer">View Recipes</button>
          </div>
        </div>
    </div>
  )
}

export default Rating_FoodView;